import random

def Key_Scheduling(key):
    key_length = len(key)
    if key_length > 256:
        raise ValueError("Key too long (max length = 256)")
    S = list(range(256))
    j = 0
    for i in range(256):
        j = (j + S[i] + key[i % key_length]) % 256
        S[i], S[j] = S[j], S[i]
    return S
    
def pad_key(key):
    padded_key = bytearray(256)
    key_len = len(key)
    if key_len > 256:
        raise ValueError("Key too long (max length = 256)")
    padded_key[:key_len] = bytearray(key.encode())
    padded_key[key_len:] = bytearray(256 - key_len)
    return padded_key
    
def stream_generation(S):
    i = 0
    j = 0
    while True:
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        S[i], S[j] = S[j], S[i]
        K = S[(S[i] + S[j]) % 256]
        yield K
        
def encrypt(plaintext, key):
    key = pad_key(key)
    S = Key_Scheduling(key)
    keystream = stream_generation(S)
    encrypted_text = ""
    for c in plaintext:
        if c.isalpha():
            if c.islower():
                c = chr((ord(c) + next(keystream) - 97) % 26 + 97)
            elif c.isupper():
                c = chr((ord(c) + next(keystream) - 65) % 26 + 65)
        elif c.isnumeric():
            c = str((int(c) + next(keystream)) % 10)
        encrypted_text += c
    return encrypted_text
    
def decrypt(ciphertext, key):
    key = pad_key(key)
    S = Key_Scheduling(key)
    keystream = stream_generation(S)
    decrypted_text = ""
    for c in ciphertext:
        if c.isalpha():
            if c.islower():
                c = chr((ord(c) - next(keystream) - 97) % 26 + 97)
            elif c.isupper():
                c = chr((ord(c) - next(keystream) - 65) % 26 + 65)
        elif c.isnumeric():
            c = str((int(c) - next(keystream)) % 10)
        decrypted_text += c
    return decrypted_text
    
ed = input('Enter 1 for Encrypt, or 2 for Decrypt: ').upper()
if ed == '1':
    text= input("Enter a plaintext: ")
    key=input("Enter the key: ")
    encrypted_text = encrypt(text, key)
    print("Cipher text is:", encrypted_text)
elif ed == '2':
    TEXT = input("Enter cipher text: ")
    KEY = input("Enter key: ")
    decrypted_text = decrypt(TEXT, KEY)
    print("Decrypted message:", decrypted_text)
else:
    print('Error in input - try again.')