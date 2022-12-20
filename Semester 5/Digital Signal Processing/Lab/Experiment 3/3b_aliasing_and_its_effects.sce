// Aliasing and It's Effect - DSP Lab - Experiment 3 - RA2011004010051 - Kunal Keshan
function [F]= aliasfrequency(f, s, s1)
    if(s>2*f) then
        disp('Aliasing not occured');
    else 
        disp('Aliasing Occured');
    end
F = f/s;
for i = 1:100
    if(abs(F)>0.5)
        F=F-i;
    end
end
fa=F*s1;
disp(fa, 'Frequency of Reconstructed Signal is');
endfunction

f=input('Enter the frequency');
s=240 // Sampling frequency
s1=s;
aliasfrequency(f, s);
s=140; // Sampling Frequency
s1=s;
aliasfrequency(f,s,s1);
s=90; // Sampling Frequency
s1=s;
aliasfrequency(f,s,s1);
s1=s;
aliasfrequency(f,s,s1);
