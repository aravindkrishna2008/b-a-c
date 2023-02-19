import cv2

cap = cv2.VideoCapture(1)

while True:
    ret, frame = cap.read()

    # black and white
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # blur
    frame = cv2.GaussianBlur(frame, (21, 21), 0)


    cv2.imshow('Camera', frame)

    if cv2.waitKey(1) == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()