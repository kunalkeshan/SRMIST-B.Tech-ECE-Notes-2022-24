clc;clear;close;
fp=4e+3// input('Enter the pass band edge Hz = ');
fs=4.5e+3//input('Enter the stop band edge Hz = ');
kp=0.8//input('Enter the pass band attenuation db = ');
ks=50//input('Enter the stop band attenuation db = ');
Fs=22e+3//input('Enter the sampling rate samples / sec = ');
d1=10^(kp/20);
d2=10^(ks/20);
d=sqrt((1/(d2^2))-1);
E=sqrt((1/(d1^2))-1);
wp=2*%pi*fp*1/Fs;
ws=2*%pi*fs*1/Fs;
op=2*Fs*tan(wp/2);
os=2*Fs*tan(ws/2);
N=acosh(d/E)/acosh(os/op);
oc=op/((E^2)^(1/(2*N)))
N=real(ceil(N))
disp(N, 'IIR Filter Order N = ');
disp(oc, 'Cutoff Freq in rad/sec Oc = ');
[pols ,gn] = zpch1(N,E,op);
HS = poly(gn, 's', 'coeff')/real(poly(pols, 's'));
z=poly(0, 'z');
Hz=horner(HS, (2*Fs*(z-1)/(z+1)))
num=coeff(Hz(2))
den=coeff(Hz(3))
Hz(2)=Hz(2)./den(3)
Hz(3)=Hz(3)./den(3);
disp(Hz, 'Transfer function of Digital IR Chebyshev LPF H(z)=');
[Hw, w] = frmag(Hz, 256);
figure(1)
plot(2*w*%pi, 20*log10(abs(Hw)))
xlabel('Digital Frequency W>')
ylabel('Magnitude in db');
title('Magnitude Response of IIR LPF');
xgrid(1)
