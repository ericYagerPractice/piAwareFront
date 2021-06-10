import json
from boto3 import Session as AWSSession
from requests_aws4auth import AWS4Auth
from gql import gql
from gql.client import Client
from gql.transport.requests import RequestsHTTPTransport
import os

def aircraftDataFunction(client, event):
    writeAircraftData = """
        mutation CreateAircraftData(
            $input: CreateAircraftDataInput!
            $condition: ModelAircraftDataConditionInput
        ) {
        createAircraftData(input: $input, condition: $condition) {
            id
            data
        }
    }
    """

    params = {
        "input" : {"data": event}
    }

    queryOperation = client.execute(
        gql(writeAircraftData),
        variable_values = json.dumps(params)
    )

    return queryOperation



def clientConfiguration():
    configDetails = {
        'keyID': os.environ['KEY_ID'],
        'key': os.environ['KEY'],
        'region': 'us-east-1',
        'endpoint': 'https://yoob6l7g3jbhne3esl2hhjkemy.appsync-api.us-east-1.amazonaws.com/graphql'
    }

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
      
    aws = AWSSession(aws_access_key_id=configDetails['keyID'],
                     aws_secret_access_key=configDetails['key'],
                     region_name=configDetails['region'])

    credentials = aws.get_credentials().get_frozen_credentials()

    auth = AWS4Auth(
        credentials.access_key,
        credentials.secret_key,
        aws.region_name,
        'appsync',
        session_token=credentials.token,
    )

    transport = RequestsHTTPTransport(url=configDetails['endpoint'],
                                      headers=headers,
                                      auth=auth)

    client = Client(transport=transport,
                    fetch_schema_from_transport=True)
                    
    return client


def handler(event, context):
    print('received event:')
    print("event: ",event)
    print("context", context)

    client = clientConfiguration()

    writeData = aircraftDataFunction(client, event)

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(writeData)
  }