# import zipfile

# # Path to the ZIP file
# zip_file_path = 'addison.tar'

# # Function to read and display the headers and metadata of a ZIP file
# def read_zip_metadata(zip_path):
#     try:
#         with zipfile.ZipFile(zip_path, 'r') as zip_ref:
#             for file_info in zip_ref.infolist():
#                 print(f"File Name: {file_info.filename}")
#                 print(f"Compressed Size: {file_info.compress_size} bytes")
#                 print(f"Uncompressed Size: {file_info.file_size} bytes")
#                 print(f"Compression Type: {file_info.compress_type}")
#                 print(f"Date and Time: {file_info.date_time}")
#                 print(f"Is Directory: {file_info.is_dir()}")
#                 print(f"External Attributes: {file_info.external_attr}")
#                 print(f"Header Offset: {file_info.header_offset}")
#                 print("-" * 40)
#     except zipfile.BadZipFile:
#         print("Error: The file is not a valid ZIP file.")
#     except FileNotFoundError:
#         print("Error: The specified ZIP file does not exist.")

# # Example usage
# read_zip_metadata(zip_file_path)  # Uncomment this line and provide a valid ZIP file path to use the function.


from magic import Magic
import os

def identify_file(filename):
  """
  Attempts to identify the type of a file without an extension.

  Args:
    filename: The path to the file.

  Returns:
    A string with the identified file type, or "Unknown" if it cannot be determined.
  """
  if os.path.splitext(filename)[1]:
    return "File has extension, skipping"

  # Use magic library to identify the file type
  mime = Magic(mime=True)
  file_type = mime.from_file(filename)

  if file_type:
    return file_type
  else:
    return "Unknown"

# Example usage
filename = "file_without_extension"
file_type = identify_file(filename)

if file_type != "Unknown":
  print(f"File type: {file_type}")
else:
  print(f"Couldn't identify file type for {filename}")