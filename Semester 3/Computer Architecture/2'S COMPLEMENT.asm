DATA SEGMENT
    X1 DB 01H
    Y DB ?
    
    CODE SEGMENT
        ASSUME CS: CODE, DS:DATA
        START:
        MOV AX,DATA
        MOV DS, AX 
        MOV AL,X1
        NEG AL
        MOV Y,AL 
        CODE ENDS
        END START
        