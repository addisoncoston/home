import cv2
import numpy as np

# Read input image
img = cv2.imread('extracted_frames\\right_frame_0001.jpg')

# Define camera matrix parameters
focal_length = 500
center = (img.shape[1] / 2, img.shape[0] / 2)
camera_matrix = np.array(
    [[focal_length, 0, center[0]],
     [0, focal_length, center[1]],
     [0, 0, 1]], dtype="double"
)

# List of different distortion coefficients to try
distortion_sets = [
    (0.1, 0.05, 0.01, 0.01, 0.0),  # Set 1
    (0.2, 0.1, 0.02, 0.02, 0.0),   # Set 2
    (0.0, 0.0, 0.0, 0.0, 0.0),     # Set 3 (no distortion)
    # Add more sets as needed
]

for i, (k1, k2, p1, p2, k3) in enumerate(distortion_sets):
    # Define distortion coefficients for this set
    dist_coeffs = np.array([[k1], [k2], [p1], [p2], [k3]])

    # Undistort input image
    undistorted = cv2.undistort(img, camera_matrix, dist_coeffs)

    # Save output with a filename indicating the coefficients used
    filename = f'undistorted_image_set_{i+1}_k1_{k1}_k2_{k2}_p1_{p1}_p2_{p2}_k3_{k3}.jpg'
    cv2.imwrite(filename, undistorted)
