a =1.5; 
n =1:10;  
x = (a)^n;
a=gca();
a.thickness = 2;
plot2d3('gnn',n,x) 
xtitle('Discrete Exponential');
