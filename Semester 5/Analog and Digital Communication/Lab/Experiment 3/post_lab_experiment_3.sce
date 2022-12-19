t=linspace(0,0.1,1000)
Ac=9;
Am=4.5;
fc=1000;
fm=300;
Vc=Ac*cos(((2*%pi)*fc)*t);
Vm=Am*sin(((2*%pi)*fm)*t);
m=2;
Vfm=Ac*cos(((2*%pi)*fc)*t)+m*sin(((2*%pi)*fm)*t);
subplot(311);
plot(t, Vm);
title("Modulating Signal");
subplot(312);
plot(t, Vc);
title("Carrier Signal");
subplot(313);
plot(t, Vfm);
title("Frequency Modulated Signal");
