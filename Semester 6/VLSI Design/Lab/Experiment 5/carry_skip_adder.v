module skiplogic(sum,cout,a,b,cin);
input [3:0]a,b;
input cin;
output [3:0]sum;
output cout;
wire c1,c2,c3,c4,p0,p1,p2,p3,sel;
fa fa1(sum[0],c1,a[0],b[0],cin);
fa fa2(sum[1],c2,a[1],b[1],c1);
fa fa3(sum[2],c3,a[2],b[2],c2);
fa fa4(sum[3],c4,a[3],b[3],c3);
xor(p0,a[0],b[0]);
xor(p1,a[1],b[1]);
xor(p2,a[2],b[2]);
xor(p3,a[3],b[3]);
assign sel=p0&p1&p2&p3;
mux2_1_sw m1(cout,c4,cin,sel);
endmodule

module mux2_1_sw(q,d1,d2,select);
output q;
input d1,d2;
input select;
wire w;
not(w,select);
cmos c1(q,d1,w,select);
cmos c2(q,d2,select,w);
endmodule

module fa(s,co,a,b,c);
input a,b,c;
output s,co;
assign s=a^b^c;
assign co=(a&b)|(b&c)|(c&a);
endmodule