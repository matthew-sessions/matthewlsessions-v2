import pytest
from unittest.mock import MagicMock
from tests.utils import DBInterface


@pytest.mark.asyncio
async def test_unprotected(test_app):
    """Test basic endpoint with no auth."""
    result = await test_app.get("auth/unprotected")
    assert result.status_code == 200
    assert result.json() == {"status": "ok", "ok": True}


@pytest.mark.asyncio
async def test_protected(test_app):
    """Test protected endpoint."""
    result = await test_app.get("auth/protected")
    assert result.status_code == 403


@pytest.mark.asyncio
async def test_register_user_taken(test_app, mock_mongo):
    """Test register endpoint where the email is already taken."""
    DB = DBInterface()
    mock_mongo.find_one.side_effect = DB.find_one
    result = await test_app.post(
        "auth/register",
        json={"email": "test@email.com", "password": "testpassword11!"},
    )
    assert result.status_code == 400
    data = result.json()
    assert data["message"] == "Email already taken." and data["ok"] == False


@pytest.mark.asyncio
async def test_register_password_fail(test_app, mock_mongo):
    """Test register endpoint where the email is already taken."""
    DB = DBInterface()
    mock_mongo.find_one.side_effect = DB.find_one
    result = await test_app.post(
        "auth/register",
        json={"email": "test2@email.com", "password": "testpas"},
    )
    assert result.status_code == 400
    data = result.json()
    assert data["message"] == "Password must be more than 8 letters."

    result = await test_app.post(
        "auth/register",
        json={"email": "test2@email.com", "password": "testpassword"},
    )
    data = result.json()
    assert result.status_code == 400
    assert data["message"] == "Password must have a number."


@pytest.mark.asyncio
async def test_register_complete(test_app, mock_mongo):
    """Test register endpoint to complete."""
    DB = DBInterface()
    mock_mongo.find_one.side_effect = DB.find_one
    mock_mongo.insert.side_effect = DB.insert

    result = await test_app.post(
        "auth/register",
        json={"email": "test2@email.com", "password": "testpassword1"},
    )
    assert result.status_code == 201


@pytest.mark.asyncio
async def test_login_success(test_app, mock_mongo):
    """Test login success."""
    DB = DBInterface()
    mock_mongo.find_one.side_effect = DB.find_one
    mock_mongo.insert.side_effect = DB.insert

    await test_app.post(
        "auth/register",
        json={"email": "test2@email.com", "password": "testpassword1"},
    )
    result = await test_app.post(
        "auth/login",
        json={"email": "test2@email.com", "password": "testpassword1"},
    )
    assert result.status_code == 201


@pytest.mark.asyncio
async def test_login_failed(test_app, mock_mongo):
    """Test login failed for email and wrong password."""
    DB = DBInterface()
    mock_mongo.find_one.side_effect = DB.find_one
    mock_mongo.insert.side_effect = DB.insert

    await test_app.post(
        "auth/register",
        json={"email": "test2@email.com", "password": "testpassword1"},
    )
    result = await test_app.post(
        "auth/login",
        json={"email": "wrong@email.com", "password": "testpassword1"},
    )
    assert result.status_code == 401

    result = await test_app.post(
        "auth/login",
        json={"email": "test2@email.com", "password": "wrongpassword1"},
    )
    assert result.status_code == 401


@pytest.mark.asyncio
async def test_login_token(test_app, mock_mongo):
    """Test login success."""
    DB = DBInterface()
    mock_mongo.find_one.side_effect = DB.find_one
    mock_mongo.insert.side_effect = DB.insert

    await test_app.post(
        "auth/register",
        json={"email": "test2@email.com", "password": "testpassword1"},
    )
    result = await test_app.post(
        "auth/login",
        json={"email": "test2@email.com", "password": "testpassword1"},
    )

    token = result.json().get("token")
    header = {"Authorization": f"Bearer {token}"}

    check_res = await test_app.get("auth/check", headers=header)
    assert check_res.status_code == 200
    assert check_res.json()["ok"] == True
