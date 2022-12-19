// RA2011004010051 Kunal Keshan ECE A

clc;
clf;
clear all;
fc=20000;
ac=9;
t=linspace(0,0.01, 500);
vc=ac*sin(2*%pi*fc*t);
subplot(411);
plot(t, vc);
xlabel('t');
ylabel('vc');
title("Carrier Signal");

fm=1000;
am=4.5;
vm=am*sin(2*%pi*fm*t);
subplot(412);
plot(t, vm);
xlabel('t');
ylabel('vm');
title("Message Signal");

m=0.75;
vt=(ac*(1+m*sin(2*%pi*fm*t)).*sin(2*%pi*fc*t));
subplot(413);
plot(t, vt);
xlabel('t');
ylabel('vt');
title("Modulated Signal");
