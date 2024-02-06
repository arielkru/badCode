import os, stat
from cryptography.hazmat.primitives.asymmetric import rsa, dsa
from Crypto.PublicKey import DSA
from socket import socket, AF_INET, SOCK_STREAM, SOCK_NONBLOCK

# Set a file write by others.
temp_file = "/tmp/foo.txt"
os.chmod(temp_file, stat.S_IWOTH)

with open(temp_file, 'r') as f:
    print(f)

os.chmod("/tmp/foo.txt", stat.S_IXGRP)
tar_file = '/file.tax*'
os.system(tar_file)

KEY_SIZE = 1024
private_rsa_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=KEY_SIZE
)

private_dsa_key = dsa.generate_private_key(
    key_size=KEY_SIZE,
)


private_dsa_key_2 = DSA.generate(bits=KEY_SIZE)

assert(private_dsa_key_2 == private_dsa_key)

program = 'a = 5\nb=10\nprint("Sum =", a+b)'
exec(program)


def is_real_user(user="user123", password="Password1"):
    return True


sock = socket(
    AF_INET,
    SOCK_STREAM | SOCK_NONBLOCK)

# Bind the socket to the internet with a port number
sock.bind(("::", 32007))


def add_server_port(sg, server_name, port):
    server = _get_server(sg, server_name, port)
    if server is not None:
        return False
    set_port(port)
    return server

add_server_port('security-group', 'server', 80)






