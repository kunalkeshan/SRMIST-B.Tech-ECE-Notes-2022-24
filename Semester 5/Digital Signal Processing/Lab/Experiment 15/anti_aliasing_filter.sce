clc;
clf;
clear all;
b=4 //input('enter no of bits');
n=50 // input('enter band width in kHz');
As=20*log10(2^b*sqrt(6))
Vs=(10&(0.1*As)-1)^(1/(2*n));
fp=4;
fs=Vs*fp;
S=2*fs;
fa=S-fp;
Va=fa/fp;
Aa=10*log10(1+Va^(2*n))
