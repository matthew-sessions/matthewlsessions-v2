import boto3
from decouple import config

# aws_access_key_id = config("ACCESS_KEY_ID")
# aws_secret_access_key = config("SECRET_ACCESS_KEY")
# endpoint_url = config("OBJECT_URL")
aws_access_key_id, aws_secret_access_key, endpoint_url = config("VULTR_OBJECT").split(
    "&"
)


session = boto3.session.Session()
client = session.client(
    "s3",
    endpoint_url=endpoint_url,
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
)

bucket = client.list_objects(Bucket="ssl")

key = client.get_object(Bucket="ssl", Key="s.key")
chain = client.get_object(Bucket="ssl", Key="chain.csr")
env = client.get_object(Bucket="envs", Key="farmenv.txt")

key_file = key["Body"].read().decode("utf-8")
chain_file = chain["Body"].read().decode("utf-8")
env_file = env["Body"].read().decode("utf-8")

key_writer = open("nginx/ssl/s.key", "w")
chain_writer = open("nginx/ssl/chain.csr", "w")
env_writer = open(".env", "w")

key_writer.write(key_file)
chain_writer.write(chain_file)
env_writer.write(env_file)

key_writer.close()
chain_writer.close()
env_writer.close()
