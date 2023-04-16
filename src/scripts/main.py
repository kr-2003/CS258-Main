import os
import sys
import json
import re


def main(args):
    images = {}
    paths = [os.listdir(path) for path in args]
    imgs = [{f.split(".")[0]: f for f in files if f.endswith(
        ".jpg") or f.endswith(".png") or f.endswith(".jpeg")} for files in paths]
    for img in imgs[0]:
        patterns = [re.compile(img)]
        {f"{paths[0]}/{img}": [
            im for im in paths if len(pattern.findall(im)) > 0]}
        image_paths = [f"{path}\{img}" for img in imgs]
        images[path] = image_paths
    with open("paths.json", "w") as f:
        json.dump(images, f, indent="\t")


if _name_ == "_main_":
    if len(sys.argv) > 1:
        main(sys.argv[1:])
    else:
        print("Provide At Least 1 Path")
    pattern = re.compile("image1")
    print(len(pattern.findall("image1_obj")) > 0)
# "C:\Users\Asus\Pictures" "C:\Users\Asus\Pictures\senior interaction1"
