// Low Pass Filter Using Hanning and Hamming
clear;
clc;
close;
N=7;
alpha=3;
U=1;
// h_hann=window('hn', N);
h_hamm=window('hm', N);
for n = 0+U:1:6+U
    if n == 4
        hd(n)=0.25;
    else
        hd(n)=(sin(%pi*(n-U-alpha)/4))/(%pi*(n-U-alpha));
    end
    // h(n)=h_hann(n)*hd(n);
    h(n)=h_hamm(n)*hd(n)
end
[hzm, fr]=frmag(h, 256);
hzm_dB = 20*log10(hzm)/max(hzm);
figure
plot(2*fr, hzm_dB);
a=gca();
xlabel("Frequency w*pi");
ylabel("Magnitude in dB");
// title("Frequency Response of FIR LPF with N=7 Using Hanning Window");
title("Frequency Response of FIR LPF with N=7 Using Hamming Window");
xgrid(2);
