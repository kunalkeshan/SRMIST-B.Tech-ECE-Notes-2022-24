module Adder_4bit_fulladder(A,B,Cin,S,Cout); 
  input [3:0]A; 
  input [3:0]B; 
  input Cin; 
  output [3:0]S; 
  output Cout;  
  wire [3:1]carry;

  FullAdder f0(S[0] , carry[1] , A[0] , B[0] , Cin);
  FullAdder f1(S[1] , carry[2] , A[1] , B[1] , carry[1]);
  FullAdder f2(S[2] , carry[3] , A[2] , B[2] , carry[2]);
  FullAdder f3(S[3] ,  Cout, A[3] , B[3] , carry[3]);
  
endmodule 