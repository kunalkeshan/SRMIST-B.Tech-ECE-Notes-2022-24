L=5;
n=-L:L;
x=[zeros(1, L), ones(1, L+1)];
a = gca();
a.y_location="middle";
plot2d3(n, x);
title('Unit Step');
xlabel('n');
ylabel('x');
