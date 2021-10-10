import pytest
from tests.utils import DBInterface


@pytest.mark.asyncio
async def test_emailauth(test_app, mock_email, mock_mongo):
    """Test send endpoint."""
    DB = DBInterface()
    mock_mongo.update.side_effect = DB.update
    mock_email.send.return_value = "5555"
    result = await test_app.post(
        "auth/emailauth",
        json={"email": "test2@email.com"},
    )
    assert result.status_code == 201
    mock_email.send.assert_called_with("test2@email.com")


@pytest.mark.asyncio
async def test_emailauth_validated(test_app, mock_email, mock_mongo):
    """Test send endpoint."""
    DB = DBInterface()
    mock_mongo.update.side_effect = DB.update
    mock_mongo.find_one.side_effect = DB.find_one
    mock_email.send.return_value = "5555"

    await test_app.post(
        "auth/emailauth",
        json={"email": "test2@email.com"},
    )
    result = await test_app.post(
        "auth/emailvalidation",
        json={"email": "test2@email.com", "code": "5555"},
    )
    assert result.status_code == 201
    assert "token" in result.json()
