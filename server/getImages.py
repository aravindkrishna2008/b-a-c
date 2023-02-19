objw_yellow = float(objw_yellow)

while(capture):
    _, frame = cap.read()
    while (frame is None):
        _, frame = cap.read()
    # Converts images from BGR to HSV
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    lower_blue = np.array([130,50,50])
    upper_blue = np.array([160,255,255])
    lower_yellow = np.array([25, 100, 100])
    upper_yellow = np.array([35, 255, 255])

    # Creates a mask showing all "blue" objects and one showing all "yellow" objects in the frame
    mask_blue = cv2.inRange(hsv, lower_blue, upper_blue)
    mask_yellow = cv2.inRange(hsv, lower_yellow, upper_yellow)
    #res_blue = cv2.bitwise_and(frame,frame, mask= mask_blue)
    #res_yellow = cv2.bitwise_and(frame, frame, mask= mask_yellow)
    pix_blue =  255 * mask_blue.shape[0] * mask_blue.shape[1]
    pix_yellow = 255 * mask_yellow.shape[0] * mask_yellow.shape[1]
    has_blue = (np.sum(mask_blue) > (0.01*pix_blue))
    has_yellow = (np.sum(mask_yellow) > (0.05*pix_yellow))
    cv2.imshow('frame',frame)
    if not has_yellow:
        blur = cv2.GaussianBlur(mask_blue, (5,5), 0)
    else:
        blur = cv2.GaussianBlur(mask_yellow, (5,5), 0)
    blur = cv2.Canny(blur, 50, 100)
    blur = cv2.dilate(blur, None, iterations=1)
    blur = cv2.erode(blur, None, iterations=1)
    contours = cv2.findContours(blur.copy(), cv2.RETR_EXTERNAL,
cv2.CHAIN_APPROX_SIMPLE)
    contours = imutils.grab_contours(contours)
    max=0
    final_index=-1
    index = -1;
    if not has_yellow:
        ratio = objw_blue/objh_blue
