DATA SEGMENT
    X1 DW 0008H
    X2 DW 0002H
    Y DW ?
    
    CODE SEGMENT
        ASSUME CS: CODE, DS:DATA
        START:
        MOV AX,DATA
        MOV DS, AX
        MOV AX,X1
        MOV CX,X2
        DIV CX
        MOV Y,AX 
        CODE ENDS
        END START
        