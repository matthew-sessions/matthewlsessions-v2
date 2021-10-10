"""Common fixtures used by all test cases."""
import pytest
import asyncio
from unittest.mock import patch, MagicMock
from httpx import AsyncClient

from app.main import app


@pytest.mark.anyio
@pytest.fixture()
async def test_app():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        yield ac
