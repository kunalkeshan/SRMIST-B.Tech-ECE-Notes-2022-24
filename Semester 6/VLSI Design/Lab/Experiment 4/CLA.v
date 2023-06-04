module CLA(S , Cout , A , B , Cin);
  input [3:0]A;
  input [3:0]B; 
  input Cin;
  output Cout; 
  output[3:0]S;
  wire [3:1]C;
  wire [0:3]P; 
  wire [0:3]G;
  
  /// Making Ps
  xor #(2) p0(P[0] , A[0] , B[0]);
  xor #(2) p1(P[1] , A[1] , B[1]);
  xor #(2) p2(P[2] , A[2] , B[2]);
  xor #(2) p3(P[3] , A[3] , B[3]);
  
  /// Making Gs 
  and #(2) g0(G[0] , A[0] , B[0]);
  and #(2) g1(G[1] , A[1] , B[1]);
  and #(2) g2(G[2] , A[2] , B[2]);
  and #(2) g3(G[3] , A[3] , B[3]);
  
  /// Making C1
  wire tmp1;
  and #(2) c11(tmp1 , P[0] , Cin);
  or #(2) c12(C[1] , G[0] , tmp1);
  
  /// Making C2
  wire tmp2;
  wire tmp3;
  and #(2) c21(tmp2 , P[1] , G[0]);
  and #(3) c22(tmp3 , P[1] , P[0] , Cin);
  or #(3) c23(C[2] , tmp2 , tmp3 , G[1]);
  
  /// Making C3
  wire tmp4;
  wire tmp5;
  wire tmp6;
  and #(2) c31(tmp4 , P[2] , G[1]);
  and #(3) c32(tmp5 , P[2] , P[1] , G[0]);
  and #(4) c33(tmp6 , P[2] , P[1] , P[0] , Cin);
  or #(4) c34(C[3] , tmp4 , tmp5 , tmp6 , G[2]);
  
  /// Making Cout (C4)
  wire tmp7;
  wire tmp8;
  wire tmp9;
  wire tmp10;
  and #(2) c41(tmp7 , P[3] , G[2]);
  and #(3) c42(tmp8 , P[3] , P[2] , G[1]);
  and #(4) c43(tmp9 , P[3] , P[2] , P[1] , G[0]);
  and #(5) c44(tmp10 , P[3] , P[2] , P[1] , P[0] , Cin);
  or #(5) c45(Cout , tmp7 , tmp8 , tmp9 , tmp10 , G[3]);
  
  /// Making Sums
  xor #(2) s0(S[0] , P[0] , Cin);
  xor #(2) s1(S[1] , P[1] , C[1]);
  xor #(2) s2(S[2] , P[2] , C[2]);
  xor #(2) s3(S[3] , P[3] , C[3]);
  
endmodule