module FullAdder(Sum , Carry , x , y , z);
  input x , y , z;
  output Sum , Carry;
  wire s1 , d1 , d2;
  xor #(2) g1(s1 , x , y);
  and #(2) g2(d1 , x , y);
  and #(2) g3(d2 , z , s1);
  xor #(2) g4(Sum , z , s1);
  or #(2) g5(Carry , d1 , d2);
endmodule