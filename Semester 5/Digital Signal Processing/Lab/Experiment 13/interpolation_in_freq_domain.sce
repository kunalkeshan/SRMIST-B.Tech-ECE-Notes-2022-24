clf();clc;clear;close;
samp_freq=100;
sig_freq=3;
interp_fac=2;
time_index=0:99;
time_axis=time_index/samp_freq;
inp_sig=sin(2*%pi*sig_freq*time_axis);
subplot(1,2,1)
plot2d3(time_axis,inp_sig)
title('Input Signal')
inp_sig = inp_sig(:)
sig_fft=fft(inp_sig)
sig_len=length(inp_sig)
zeropad_len=round(sig_len*(interp_fac-1))
mid_symmetry=ceil((sig_len+1)/2);
frq_interp_sig=[sig_fft(1:mid_symmetry);
zeros(zeropad_len, 1);
sig_fft(mid_symmetry+1:$)];
time_interp_sig=interp_fac*real(ifft(frq_interp_sig))
interp_sig_len=length(time_interp_sig)
new_time_axis=(0:interp_sig_len-1)/(samp_freq*interp_fac)
subplot(1,2,2)
plot2d3(new_time_axis,time_interp_sig)
title('Interpolated Signal')
