clc;
clear all;
// % Scatter Plot for QAM points
M = 4;
x = (0:M-1)';
y = qammod(x,M);
scatterplot(y)
// % Input data
N=10000;
M=4;
Es=100;
snr_dB=1:21;
// % Mapping to Signal Constellation Points
map=[-1,-1;
 1,-1;
111 
 -1,1;
 1,1];
for a=1:21
 snr(a)=10^(snr_dB(a)/10);
 sigma(a)=sqrt(Es/(4*snr(a)));
end
for a=1:21
 err=0;
// % Generation of data sources
 for b=1:N
 temp=rand;
 data(b)=1+floor(M*abs(temp));
 sign(b,:)=map(data(b),:);
 n=sigma(a)*randn(1,2);
 rec(b,:)=sign(b,:)+n;
 for c=1:M
 x=map(c,:);
 y=rec(b,:);
 dist(c)=sqrt(((x(1)-y(1))^2)-((x(2)-y(2))^2));
// % detection
 if c==1
 dmin=dist(c);
 else
 dmin=min(dist(c),dmin);
 end
 if dmin==dist(c)
 detect(b)=c;
 end
 end
 if data(b)~=detect(b)
 err=err+1;
 end
 end
 BER(a)=err/N;
end
BER
snr_dB=1:21;
figure(2);
semilogy(snr_dB,BER,'-*');
grid on
xlabel('SNR');
ylabel('BER');
title('BER performance analysis of QAM Modulation Scheme');
