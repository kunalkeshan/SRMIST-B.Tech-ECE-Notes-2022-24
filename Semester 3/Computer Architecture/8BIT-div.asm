DATA SEGMENT
    X1 DB 80H
    X2 DB 02H
    Y DB ?
    
    CODE SEGMENT
        ASSUME CS: CODE, DS:DATA
        START:
        MOV AX,DATA
        MOV DS, AX
        MOV AH,00H
        MOV CH,00H
        MOV AL,X1
        MOV CL,X2
        DIV CL
        MOV Y,AL 
        CODE ENDS
        END START
        