Authentication

Login - {host}/validate_password [POST] - Username and Password - Port 5001

Username: STXXXXXX, VLXXXXXX, ADXXXXXX
student = ST, volunteer = VL, admin = AD

Password is hashed (DB dummy data - hashed password in sha512)

Use this function to hashed a temp database:

//* def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii') *//



Chat

{host}/get_message [POST] - sendby and receivedBy - Port 5002
{host}/send_message [POST] - sendby, receivedBy and content - Port 5002


Profile

{host}/get_profile/<string:userID> [GET] 
{host}/get_profile [GET] 


