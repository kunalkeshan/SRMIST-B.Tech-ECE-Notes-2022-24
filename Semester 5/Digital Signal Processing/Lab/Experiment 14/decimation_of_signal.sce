clear all;
N=50;
n=0:1:N-1;
x=sin(2*%pi*n/20)+sin(2*%pi*n/15);
M=2;
x1=x(1:M:N);
n1=1:1:N/M;
subplot(2,1,1), plot2d3(n,x)
xlabel('n'),ylabel('x')
title('Input Sequence');
subplot(2,1,2),plot2d3(n1-1,x1)
xlabel('n'),ylabel('x1')
title('downsample sequence')
