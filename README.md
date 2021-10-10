# FastAPI and MongoDB

## Overview:

This is a template of a base project for FastAPI that interfaces with MongoDB. Basic Authentication and email validation are implemented by default. The project is run on Docker and is able to spin up a local instance of MongoDB. The deployment configuration is set up to be deployed on a single [Vultr](https://my.vultr.com/) Instance running on Nginx. This project assumes that SSL Certs and environment variables are uploaded on Vultr Object Storage.

## Run Locally

The project needs these ENVs saved in a .env file.

```python
MONGO_USER=
MONGO_PASSWORD=
SENDGRID_API=
MONGO_URI=
ACCESS_KEY_ID=
SECRET_ACCESS_KEY=
```

The following commands will build and run MongoDB, FastAPI, and Nginx locally.

```python
docker-compose build
docker-compose up
```

You can react the app via [`localhost`](http://localhost) or `localhost:8000`

## Develop locally

The following command builds the FastAPI docker image without MongoDB and Nginx and then enters the container. Once the container is entered, you can add logic, write test cases, and run test cases all inside the container.

```python
bash build.sh -e
```

## Authentication Endpoints

```python
auth/register POST
auth/login POST
auth/check GET
auth/emailauth POST
auth/emailvalidation POST
```

### register

```json
# Payload
{
	email: str,
	password: str,
}

# Response
{
	status: created,
	ok: bool
}
```

### login

```json
# Payload
{
	email: str,
	password: str,
}

# Response
{
	token: str<JWT>,
	ok: bool
}
```

### check

```json
# request header
{
	Authorization: Bearer token
}

# Response
{
	status: str,
	ok: bool
}
```

### emailauth

The email logic uses [sendgrid](https://sendgrid.com/).

```json
# Payload
{
	email: str
}

# Response
{
	status: str,
	ok: bool
}
```

### emailvalidation

```json
# Payload
{
	email: str,
	code: str
}

# Response
{
	token: str<JWT>,
	ok: bool
}
```

## Deployment

### Handling certs and envs

In Vultr Block Storage create two buckets:

- ssl
- envs

In the **ssl bucket** add to files:

- chain.csr - This is the [ssl chain cert](https://www.youtube.com/watch?v=99zyfMObC98&t=338s)
- s.key - This is the server key

In the **envs bucket** add:

- farmenv.txt - This will be the same as the .env file above, but with prod creds.

### Create a startup script

**Note**: the **VULTR_OBJECT** needs to be **access_key**, **access_secret**, and **hostname** separated by **&**.

```bash
#!/bin/sh

echo "Cloning Github Repo" > /tmp/status.txt
cd /
git clone https://github.com/StartupUtils/FastAPI_MongoDB.git

echo "Installing boto" > /tmp/status.txt
pip3 install boto3 python-decouple

echo "VULTR_OBJECT=access_key&access_secret&hostname" > /FastAPI_MongoDB/.env
cp /FastAPI_MongoDB/fastapi.service /etc/systemd/system/fastapi.service

echo "CD to Project" > /tmp/status.txt
cd /FastAPI_MongoDB
mkdir nginx/ssl
echo "Running population job" > /tmp/status.txt
python3 populate_ssl.py

echo "Managing Service" > /tmp/status.txt
systemctl daemon-reload
systemctl enable fastapi.service
systemctl start fastapi.service
echo "Job finished finally" > /tmp/status.txt
```

### Configure Instance

When creating a vultr instance, select "Marketplace Apps", then choose Docker. After selecting docker, then select the startup script you created and click deploy.
