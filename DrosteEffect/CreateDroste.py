import numpy as np
import math
from PIL import Image, ImageDraw

def main():
    print("main code")

    getImage()

#def cartpol(x, y):

#    return(a, b)

def polcart(r, p):
    x = r * np.cos(p)
    y = r * np.sin(p)
    return(x, y)

def getImage():
    count = 0
    img = Image.new('RGB',(1500,1500),"black")
    pixels = img.load()
    pixel = pixels[0,0] #first pixel value
    #for x in range(img.size[0]): #make black and white stripes
    #    for y in range(img.size[1]):
    #        count = count + 1
    #        if count > 150:
    #            pixels[x,y] = (254,254,254)
    #        if count > 300:
    #            count = 0
    radius = 1000
    draw = ImageDraw.Draw(img)
    x = 1500/2
    y = 1500/2
    flip = True
    white = (254,254,254)
    black = (0,0,0)
    numCircles = 0
    while numCircles < 100:
        print('===========')
        if flip == True:
          #  print(flip)
           # print("1:", x-radius,y-radius, x+ radius, y+radius)
            draw.ellipse((x-radius, y-radius, x + radius, y + radius), fill=(0,0,0))
            flip = False
        else:
           # print(flip)
           # print("2:",x-radius,y-radius, x+ radius, y+radius)
            draw.ellipse((x-radius, y-radius, x + radius, y + radius), fill=(254,250,250))
            flip = True
        radius = radius - 10
        numCircles = numCircles + 1

    img.save('before.png','png')
    img2 = Image.new('RGB',(1500,1500),"black")
    pixels2 = img2.load()
    count = 0
    width = 1000
    height = 1000
    maxradius = np.sqrt(width**2 + height**2)/2
    rscale = width / maxradius
    tscale = height/(2*math.pi)
    for y in range(0,height):
        dy = y - height/2
        for x in range(0, width):
            dx = x - width/2
            t = np.arctan2(dy,dx)%(2*math.pi)
            r = np.sqrt(dx**2+dy**2)

            pixels2[int(t*tscale),int(r*rscale)] = pixels[x,y]
    img2.save('after.png','png')

if  __name__ =='__main__':main()
