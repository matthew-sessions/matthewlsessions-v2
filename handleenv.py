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

env = client.get_object(Bucket="envs", Key="farmenv.txt")

env_file = env["Body"].read().decode("utf-8")

env_writer = open(".env", "w")

env_writer.write(env_file)

env_writer.close()
