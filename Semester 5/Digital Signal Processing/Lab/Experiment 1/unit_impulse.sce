L=5;
n=-L:L;
x = [zeros(1, L), ones(1, 1), zeros(1, L)];
a = gca();
a.y_location="middle";
plot2d3(n, x);
title('Unit Impulse');
