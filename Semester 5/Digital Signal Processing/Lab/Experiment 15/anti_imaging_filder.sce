clc;
clear all;
close;
clf();
Ap=0.5
fp=20
As=60
S=42.1
fs=S-fp
e=sqrt((10^(0.1*Ap-1)))
e1=sqrt(10^(0.1*As-1))
n=(log10(e1/e))/(log10(fs/fp))
n =ceil(n)
s1=176.4;
fs1=s1-fp;
Ap=0.316
e2=sqrt(10^(0.1*Ap-1))
n1=(log10(e1/e))/(log10(fs/fp))
n1 =ceil(n1)
f=0:100
x=abs(sinc(f*%pi/S))
f1=0:500
x1=abs(sinc(f1*%pi/s1))
a=gca()
subplot(2,1,1)
plot2d(f,x)
xtitle("Spectra under normal sampling rate","f(kHZ)","sinc(f/s1)");
subplot(2,1,2)
plot2d(f1,x1)
xtitle("Spectra under over sampling rate","f(kHZ)","sinc(f/s1)");
