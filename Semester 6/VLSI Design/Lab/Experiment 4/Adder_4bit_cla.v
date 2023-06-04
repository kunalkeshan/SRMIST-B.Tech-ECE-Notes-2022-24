module Adder_4bit_cla(A,B,Cin,S,Cout); 
  input [3:0]A; 
  input [3:0]B; 
  input Cin; 
  output [3:0]S; 
  output Cout;  

  CLA cla0(S,Cout,A,B,Cin);
  
endmodule 