// Program for Cross Correlation - DSP Lab 5 - Kunal Keshan
clc;
clear;
x = input('Enter the first sequence: ');
h = input('Enter the second sequence: ');
y=xcorr(x, h);
disp(y, "Cross Correlation = ");
