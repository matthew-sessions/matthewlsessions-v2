from datetime import datetime, timezone


def current_time() -> datetime:
    return datetime.utcnow()


def delta_validator(time, duration) -> bool:
    return (current_time() - time).total_seconds() < duration
