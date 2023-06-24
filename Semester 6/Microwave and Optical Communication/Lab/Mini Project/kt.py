from cmath import acosh, cos, cosh, exp, log, nan, pi, sqrt
from math import ceil
import numpy as np
import cython as cy
import scipy.special as special
import scipy.integrate as integrate
import matplotlib.pyplot as plt

# Constants
C = 299792458;
# Inputs
fLow = 2e9; #lowest freq taper needs to work at
fHigh = 40e9; #highest frequency taper needs to work at
fHighEff = fHigh+fLow; #sampling frequency margin due to 'lobe'
startFreq = 10e6; #starting frequency for analysis/plot
freqStep = 10e6; #frequency step for analysis/plot
stopFreq = 50e9; #highest frequency for analysis/plot
er = 3.2;
ZS = 50;
ZL = 100;
Z0 = ZS;
MaxRL = -40;
# Calculations
GammaMax = 10**(MaxRL/20);
rho0 = log(ZL/ZS)/2;
A = acosh(rho0/GammaMax)
wavelength = C/fLow;
lambdaeff = wavelength/sqrt(er);
beta = 2*pi/lambdaeff;
L = A/beta; #meter
numSections = ceil((L/(C/fHighEff/sqrt(er)/2)).real) #sampling at 2xfHighEff so that taper works until fHigh
print("# of sections: %g\n" % numSections)
print("L = %g cm\n" % (L*100).real)
print("L = %g mils\n" % (L*1e6/25.4).real)
l  = L/numSections;
x = np.linspace(0+l/2,L-l/2,numSections)
def integrand(y):
    return special.iv(1,A*sqrt(1-y**2))/(A*sqrt(1-y**2));
def phi(x):
    results, err = integrate.quad(integrand,0,(2*x/L-1).real,epsrel = 1e-16);
    return results;
Z = np.zeros(numSections)
for i in range(numSections):
    Z[i] = (exp(log(ZL*ZS)/2+rho0*A**2*phi(x[i])/cosh(A))).real;
print(Z)
freq = np.arange(startFreq,stopFreq,freqStep);
numFreq = np.size(freq);
beta = 2*pi/(C/freq/np.sqrt(er));
Gamma = rho0*np.exp(-1j*beta*L)*np.cos(np.sqrt(np.square(beta*L)-A**2))/cosh(A);
GammaMag = np.abs(Gamma);
plt.plot(freq,GammaMag);
plt.show();
beta = np.reshape(beta,(numFreq,1),order = 'F');
A = Z/Z*np.cos(beta*l);
A = np.reshape(A,(1,numFreq,numSections), order='F');
B = 1j*np.sin(beta*l)*Z;
B = np.reshape(B,(1,numFreq,numSections), order='F');
C = 1j*np.sin(beta*l)/Z;
C = np.reshape(C,(1,numFreq,numSections), order='F');
temp = np.concatenate((A,C,B,A),axis=0);
temp= np.reshape(temp,(2,2,numFreq,numSections), order='F');
ABCD = temp;
for i in range(numFreq):
    for j in range(numSections-1):
        ABCD[:,:,i,j+1] = np.matmul(ABCD[:,:,i,j],ABCD[:,:,i,j+1]);
    
ABCD = ABCD[:,:,:,numSections-1];
A = ABCD[0,0,:];
B = ABCD[0,1,:];
C = ABCD[1,0,:];
D = ABCD[1,1,:];
delta = A+B/ZS+C*ZS+D;
S11 = (A+B/ZS-C*ZS-D)/delta;
S12 = 2*(A*D-B*C)/delta;
S21 = 2/delta;
S22 = (-A+B/ZS-C*ZS+D)/delta;
GammaL = (ZL-ZS)/(ZL+ZS);
GammaIn = S11+S12*S21*GammaL/(1-S22*GammaL);
GammaInMag = np.abs(GammaIn);
dB = 20*np.log10(GammaInMag);
plt.plot(freq,GammaInMag);
plt.show();
plt.plot(freq,dB);
plt.show();
