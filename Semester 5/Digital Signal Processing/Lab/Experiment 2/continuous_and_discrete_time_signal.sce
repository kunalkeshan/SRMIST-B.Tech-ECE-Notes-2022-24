// Generation of Continuos time signal and discrete time signal - 
// RA2011004010051 - Kunal Keshan
t=0:0.01:2;
x1=sin(7*t)+sin(10*t);
subplot(121);
plot(t, x1);
xlabel('t');ylabel('x(t)');
title('Continuous Time Signals');
n=0:0.2:2;
x2=sin(7*n)+sin(10*n);
subplot(122);
plot2d3(n, x2);
xlabel('n');ylabel('x(n)');
title('Discrete Time Signals');
