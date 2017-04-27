# Load the image
library(png)
library(RCurl)
d <- readPNG( getBinaryURL( "http://i.stack.imgur.com/rMR3C.png" ) )
image(d, col=gray(0:255/255))

# Origin for the polar coordinates
x0 <- ncol(d)/2
y0 <- nrow(d)/2

# The value of pixel (i,j) in the final image 
# comes from the pixel, in the original image, 
# with polar coordinates (r[i],theta[i]).
# We need a grid for the values of r and theta.
r <- 1:ceiling(sqrt( max(x0,nrow(d))^2 + max(y0,ncol(d))^2))
theta <- -pi/2 + seq(0,2*pi, length = 200)
r_theta <- expand.grid(r=r, theta=theta)

# Convert those polar coordinates to cartesian coordinates:
x <- with( r_theta, x0 + r * cos(theta) )
y <- with( r_theta, y0 + r * sin(theta) )
# Truncate them
x <- pmin( pmax( x, 1 ), ncol(d) )
y <- pmin( pmax( y, 1 ), nrow(d) )

# Build an empty matrix with the desired size and populate it
r <- matrix(NA, nrow=length(r), ncol=length(theta))
r[] <- d[cbind(x,y)]
image(r, col=gray(0:255/255))
