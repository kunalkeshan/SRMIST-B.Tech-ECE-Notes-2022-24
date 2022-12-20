clear;
clc;
n=0:%pi/200:2*%pi
x=sin(%pi*n);
downsampling_x=x(1:2:length(x));
subplot(2,1,1)
plot(1:length(x), x);
xtitle('original signal')
subplot(2,1,2)
plot(1:length(downsampling_x), downsampling_x)
xtitle('Downsampled Signal by a factor of 2');
