DATA SEGMENT
    X1 DB 03H
    Y DB ?
    
    CODE SEGMENT
        ASSUME CS: CODE, DS:DATA
        START:
        MOV AX,DATA
        MOV DS, AX 
        MOV AL,01H
        MOV CL,X1
        L1: MUL CL
        LOOP L1
        MOV Y,AL 
        CODE ENDS
        END START
        