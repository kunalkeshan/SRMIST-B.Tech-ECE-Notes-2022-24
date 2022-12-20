// DSP -Exp 2 Post Lab - RA201004010051 - Kunal Keshan
n=0:10^(-6):10;
x1=sin(5*n);
subplot(121);
plot2d3(n, x1);
xlabel('n');ylabel('x(n)');
title('5*10^-6 Interval');
x2=sin(7*n);
subplot(122);
plot2d3(n, x2);
xlabel('n');ylabel('x(n)');
title('7*10^-6 Interval');
