module fa(sum, carry, a, b, cin);
input a,b,cin;
output sum, carry;
wire s1,c1,c2;
ha_df h1(s1,c1,a,b);
ha_df h2(sum,c2,s1,cin);
endmodule