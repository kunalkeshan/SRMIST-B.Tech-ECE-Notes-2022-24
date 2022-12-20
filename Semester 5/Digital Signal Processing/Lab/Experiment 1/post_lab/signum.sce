t=-5:0.1:5;
a=gca();
a.x_location="middle";
x=sign(t);
b=gca();
b.y_location="middle";
plot(t,x);
title('Signum Function');
