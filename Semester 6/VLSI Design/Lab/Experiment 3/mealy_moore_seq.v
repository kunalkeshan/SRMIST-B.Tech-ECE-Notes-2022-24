module mealy_moore_seq(meout,moout,mealy,moore,in,rst,clk);
output reg [2:0]mealy;
output reg [3:0]moore;
output reg meout,moout;

input in,rst,clk;
always @(posedge clk,rst)
begin
if(rst)
begin
	meout<=0;
	mealy<=3'b000;
	moore<=4'b0000;
	moout<=0;
end
else
begin
	case({mealy})
	3'b000:begin
		if(in==1)
		mealy<=3'b001;
		meout<=0;
		end
	3'b001:begin
		if(in==1)
		mealy<=3'b011;
		else
		mealy<=3'b000;
		end
	3'b011:begin
		if(in==1)
		mealy<=3'b111;
		else
		mealy<=3'b000;
		end
	3'b111:begin
		mealy<=3'b000;
		meout<=1;
		end
	endcase

/////////
///////////

	case({moore})
	4'b0000:begin
		if(in==1)
		moore<=4'b0001;
		moout<=0;
		end
	4'b0001:begin
		if(in==1)
		moore<=4'b0011;
		else
		moore<=4'b0000;
		end
	4'b0011:begin
		if(in==1)
		moore<=4'b0111;
		else
		moore<=4'b0000;
		end
	4'b0111:begin
		if(in==1)
		begin
		moore<=4'b1111;
		moout<=1;
		end
		else
		moore<=4'b0000;
		end
	endcase

///////
//////
///////
end
end

endmodule
