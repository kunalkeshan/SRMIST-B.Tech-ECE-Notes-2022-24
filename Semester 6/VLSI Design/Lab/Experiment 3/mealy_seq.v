module mealy_seq(out,s,in,rst,clk);
output reg [2:0]s;
output reg out;
input in,rst,clk;
always @(posedge clk,rst)
if(rst)
begin
	out<=0;
	s<=3'b000;
end
else
begin
	case({s})
	3'b000:begin
		if(in==1)
		s<=3'b001;
		end
	3'b001:begin
		if(in==1)
		s<=3'b011;
		else
		s<=3'b000;
		end
	3'b011:begin
		if(in==1)
		s<=3'b111;
		else
		s<=3'b000;
		end
	3'b111:begin
		s<=3'b000;
		out<=1;
		end
endcase
end
endmodule
