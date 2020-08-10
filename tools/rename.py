import os
import pathlib

base_dir = 'C:/Users/ashmit.khadka/Documents/Projects/pnsuk/frontend/public/assets/media/event_imgs/'

count = 0
for filename in os.listdir(base_dir):
    print(filename)

    ext = filename.split(".")[-1]
    os.rename(base_dir + filename,  base_dir + str(count) + '.' + ext)
    count = count + 1
