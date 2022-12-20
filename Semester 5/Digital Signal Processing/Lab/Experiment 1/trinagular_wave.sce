a=8;
t=0:(%pi/4):(4*%pi);
y=a*sin(2*t);
a = gca();
a.x_location = "middle";
plot(t, y);
title('Trinagular Wave');
xlabel('t');
ylabel('y');
