clf();
clc;
clear;
close;
interp_fac=2;
samp_freq=100;
freq_cycles=3;
time_index=0:99;
inter_samp_freq=samp_freq*interp_fac;
time_axis=time_index/samp_freq;
new_time_index=0:1/interp_fac:99;
new_time_axis=new_time_index/samp_freq;
inp_sig=sin(2*%pi*freq_cycles*time_axis);
out_sig=interp1(time_axis,inp_sig,new_time_axis);
subplot(1,2,1)
plot2d3(time_axis, inp_sig);
title('Input Signal');
subplot(1,2,2)
plot2d3(new_time_axis,out_sig);
title('Interpolated Signal');
