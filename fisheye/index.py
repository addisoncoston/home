import subprocess
import os
import cv2
from omnicv import fisheyeImgConv

# Configuration
input_video = "C:\\Users\\addison.coston\\Downloads\\Canon converted.mp4"
output_folder = "processed_frames"
ffmpeg_path = "C:\\ProgramData\\chocolatey\\bin\\ffmpeg.exe"

# Debug Mode
debug_mode = True

# Ensure directories exist
os.makedirs(output_folder, exist_ok=True)

# Extract Frames
def extract_frames():
    frame_limit = ['-vframes', '1'] if debug_mode else []
    command = [ffmpeg_path, '-i', input_video, *frame_limit, os.path.join(output_folder, 'frame_%04d.png')]
    subprocess.run(command, check=True)

# Process Frames with OmniCV
def process_frames():
    filenames = [f for f in os.listdir(output_folder) if f.endswith(".png")]

    if debug_mode:
        filenames = filenames[:1]

    for filename in filenames:
        file_path = os.path.join(output_folder, filename)
        img = cv2.imread(file_path)

        if img is None:
            print(f"Failed to load image: {file_path}")
            continue

        # Get original dimensions
        height, width = img.shape[:2]

        # Calculate target dimensions maintaining 16:9 aspect ratio
        if width / height > 16 / 9:
            new_height = int(width / (16 / 9))
            new_width = width
        else:
            new_width = int(height * (16 / 9))
            new_height = height

        # Resize and center the image
        resized_img = cv2.resize(img, (new_width, new_height))
        center_x, center_y = int(new_width / 2), int(new_height / 2)
        cropped_img = resized_img[center_y - int(1080 / 2):center_y + int(1080 / 2), center_x - int(1920 / 2):center_x + int(1920 / 2)]

        cv2.imwrite(os.path.join(output_folder, 'processed_' + filename), cropped_img)


# Reassemble the Video
def reassemble_video():
    command = [
        ffmpeg_path, '-framerate', '30', '-i', 
        os.path.join(output_folder, 'processed_frame_%04d.png'),
        '-c:v', 'libx264', '-profile:v', 'high', '-crf', '20', '-pix_fmt', 'yuv420p', 
        'output_video_180_stereo.mp4'
    ]
    subprocess.run(command, capture_output=True, check=True)

# Main execution
if __name__ == "__main__":
    extract_frames()
    process_frames()
    reassemble_video()
