L=5;
n=-L:L;
x=[zeros(1, L),0:L];
a = gca();
a.y_location="middle";
plot2d3(n, x);
title('Unit Ramp Signal');
xlabel('n');
ylabel('x');
