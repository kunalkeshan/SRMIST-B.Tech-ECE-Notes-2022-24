// Low Pass Filter
clc;
clear;
xdel(winsid());
fc=input("Enter Analog cutoff freq in Hz: ");
fs=input("Enter Analog sampling freq in Hz: ");
M=input("Enter the order of filter: ");
w=(2*%pi)*(fc/fs);
disp(w, "Digital cut off frequency in radians, cycles/samples");
wc=w/%pi;
disp(wc, "Normalized digital cut off frequency in cycles/samples");
[wft, wfm, fr]=wfir('lp', M+1, [wc/2,0], 're', [0,0]);
disp(wft, "Impulse Response of LPF FIR Filter:h[n]: ");

subplot(2,1,1);
plot(2*fr, wfm);
xlabel("Normalized Digital Frequencey w --->");
ylabel("Magnitude |H(w)|: ");
title("Magnitude Response of FIR LPF");
xgrid(1);

subplot(2,1,2);
plot(fr*fs, wfm);
xlabel("Analog Frequencey in Hz f --->");
ylabel("Magnitude |H(w)|: ");
title("Magnitude Response of FIR LPF");
xgrid(1);
