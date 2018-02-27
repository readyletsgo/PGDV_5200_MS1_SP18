from urllib import urlretrieve
import csv
import time

# with open ('test.csv') as images:
with open ('MMAImageURLSOriginal-7000.csv') as images:
    images = csv.reader(images)
    img_count = 0
    next(images, None) 

    for image in images:
        try:
            urlretrieve(image[6], "images/" +image[4]) 
            print("downloading: " + image[6])
        except IOError:
             time.sleep(20)   
             print("failed to download: " + image[6])
             urlretrieve(image[6], "images/" +image[4]) 
