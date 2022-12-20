clear all;
clc;
close;
ap=3//input('enter the value of ap in dB');
as=10//input('enter the value of as in dB');
fp=1000//input('enter the value of fp in Hz');
fs=350//input('enter the value of fs in Hz');
f=5000//input('enter the value of f');

T=1/f;
wp=2*%pi*fp;
ws=2*%pi*fs;
op=2/T*tan(wp*T/2)
os=2/T*tan(ws*T/2)
N=log(sqrt((10**(0.1*as)-1)/(10**(0.1*ap)-1)))/log(op/os);
disp(ceil(N));
s=%s;
HS=1/(s+1);
oc=op;
HS1=horner(HS,oc/s);
disp(HS1, 'Normalized transfer function, H(s)=');
z=%z;
HZ=horner(HS, (2/T)*(z-1)/(z+1));
disp(HZ, 'H(z)=');
