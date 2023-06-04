module asm(ya,yb,yc,y1,y2,clk,x,rst);
input clk,x,rst;
output reg ya,yb,yc,y1,y2;
reg [1:0]state,nextstate;
parameter [1:0] S0=0,S1=1,S2=2;
always @(posedge clk)
state<=nextstate;
always @(state or x)
begin
y1=1'b0;
y2=1'b0;
case(state)
S0:if(x)
nextstate=S1;
else nextstate=S0;
S1:if(x)
nextstate=S2;
else
nextstate=S0;
S2:if(x)
begin
y2=1'b1;
nextstate=S1;
end 
else
begin
y1=1'b1;
nextstate=S0;
end
default:
nextstate=S0;
endcase
end
always @(state)
begin
ya=1'b0;
yb=1'b0;
yc=1'b0;
case(state)
S0:ya=1'b1;
S1:yb=1'b1;
S2:yc=1'b1;
default:begin
ya=1'b0;
yb=1'b0;
yc=1'b0;
end 
endcase
end 
endmodule