// Linear Convolution - DSP Lab - Experiment 4 - RA2011004010051 - Kunal Keshan
clc;
clf;
clear all;
x = input("Enter the first Sequence: ");
h = input("Enter the second sequence: ");
disp(conv(x, h), "Convolution = ");
y = conv(x, h);
