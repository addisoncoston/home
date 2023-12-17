# It seems there was an error reading the file directly. 
# Let's try a different approach using an XML parser to read the file and get its structure.

import xml.etree.ElementTree as ET

# Parse the XML file
file_path = 'test_2.xml'

tree = ET.parse(file_path)
root = tree.getroot()

# Displaying the structure of the XML by printing the tag of each element and its text (if any) for the first few elements
for child in root:
    print(f"Tag: {child.tag}, Attributes: {child.attrib}")
    for subchild in child:
        print(f"    SubTag: {subchild.tag}, Text: {subchild.text}")
