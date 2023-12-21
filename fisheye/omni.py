import cv2
import numpy as np
import math
import sys
from omnicv import fisheyeImgConv

Img_path = sys.argv[1]

# Path to the file containing fisheye camera parameters (obtained using GUI)
param_file_path = "../fisheyeParams.txt"

# Reading the fisheye image
frame = cv2.imread(Img_path)

outShape = [400,800]
inShape = frame.shape[:2]

# In case of fisheye lens placed vertically
mapper = fisheyeImgConv(param_file_path)
frame2 = mapper.fisheye2equirect(frame,outShape)

# Use the below line if there are multiple images and the mapping is not changing in case of a video
frame2 = mapper.applyMap(0,frame)

cv2.imshow("image",frame2)
cv2.waitKey(0)