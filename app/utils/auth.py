from jose import JWTError, jwt
from fastapi import HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from passlib.context import CryptContext
from datetime import datetime, timedelta
from fastapi.responses import JSONResponse
from typing import Optional
import re
from app.utils.config import CONFIG


class PasswordValidation:
    """Build a custom password validator bt extending this class"""

    def __init__(self, password: str) -> None:
        """Insert password to do validation"""
        self.password = password
        self.set_status(None, True)
        self.validate()

    def set_status(self, message: str, valid: bool) -> None:
        """Set the message and valid status"""
        self.message = message
        self.valid = valid

    def validate(self) -> None:
        """Add custom validation"""
        length = CONFIG["PASSWORD_LEN"]
        if len(self.password) < length:
            self.set_status(f"Password must be more than {length} letters.", False)

        elif re.search("[0-9]", self.password) is None:
            self.set_status("Password must have a number.", False)


class AuthHandler:
    """Handle password authentication and jwt tokens."""

    security = HTTPBearer()
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    secret = "SECRET"

    def validate_password(self, password: str) -> PasswordValidation:
        """Validate password"""
        return PasswordValidation(password)

    def get_password_hash(self, password) -> str:
        """Has password for safe storage."""
        return self.pwd_context.hash(password)

    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """Verify the raw password recived is the same as the stored password."""
        return self.pwd_context.verify(plain_password, hashed_password)

    def encode_token(self, user_id: str) -> str:
        """Create JWT token from user id"""
        payload = {
            "exp": datetime.utcnow() + timedelta(days=CONFIG["TOKEN_DURATION"]),
            "iat": datetime.utcnow(),
            "sub": user_id,
        }
        return jwt.encode(payload, self.secret, algorithm="HS256")

    def decode_token(self, token: str) -> Optional[bool]:
        """Decode token and get sub."""
        try:
            payload = jwt.decode(token, self.secret, algorithms=["HS256"])
            return payload["sub"]
        except jwt.ExpiredSignatureError:
            raise JSONResponse(
                status_code=404,
                content={"message": f"JWT timeout", "ok": False},
            )
        except JWTError as e:
            raise JSONResponse(
                status_code=404,
                content={"message": f"Incorrect token", "ok": False},
            )

    def auth_wrapper(self, auth: HTTPAuthorizationCredentials = Security(security)):
        """Pass in routs"""
        return self.decode_token(auth.credentials)
