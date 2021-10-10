import pytest
import asyncio
from unittest.mock import patch, MagicMock


class AsyncMock(MagicMock):
    async def __call__(self, *args, **kwargs):
        return super(AsyncMock, self).__call__(*args, **kwargs)


@pytest.fixture(autouse=True)
def mock_mongo():
    with patch("app.routers.auth.Mongoify", new_callable=AsyncMock) as mock:
        yield mock


@pytest.fixture(autouse=True)
def mock_email():
    with patch("app.routers.auth.EmailHandler") as mock:
        yield mock
