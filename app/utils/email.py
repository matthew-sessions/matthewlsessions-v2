import re
import random
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from fastapi.responses import JSONResponse
from decouple import config
from app.utils.config import CONFIG


def valid_email(email):
    regex = "^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$"
    if re.search(regex, email):
        return True
    else:
        return False


class EmailHandler:
    SECRET = config("SENDGRID_API")
    from_email = CONFIG["FROM_EMAIL"]
    from_name = CONFIG["FROM_NAME"]
    subject = CONFIG["EMAIL_SUBJECT"]

    @classmethod
    def send(cls, email) -> str:
        code = f"{random.randrange(1, 10**5):05}"
        message = Mail(
            from_email=(cls.from_email, cls.from_name),
            to_emails=email,
            subject="Let's login and learn!",
            html_content=f"<strong>Log in code: {code}</strong>",
        )
        try:
            sg = SendGridAPIClient(cls.SECRET)
            sg.send(message)
            return code
        except Exception as e:
            return JSONResponse(
                status_code=400,
                content={
                    "message": CONFIG["EMAIL_SEND_FAIL_MESSAGE"],
                    "info": e.message,
                    "ok": False,
                },
            )
