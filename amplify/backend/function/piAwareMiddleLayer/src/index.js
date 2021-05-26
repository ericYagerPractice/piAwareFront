exports.handler = async function (event) {
  
  const appsync = require('aws-appsync');
  const gql = require('graphql-tag');
  require('cross-fetch/polyfill');
  
  let res = '';
  
  if ('Records' in event) {
    
    const graphqlClient = new appsync.AWSAppSyncClient({
      url: 'https://yoob6l7g3jbhne3esl2hhjkemy.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      auth: {
        type: 'API_KEY',
        apiKey: 'da2-fmeey2g2ofeitijauqzzuhujty'
      },
      disableOffline: true
    });
  
    const mutation = gql`mutation writeStreamToAircraftAppsync($value:String!) {
      createAircraftData(input: {data: $value}) {
        id
      }
    }`;

    for(const record of event.Records){
      let dataHex = Buffer.from(record.Data, 'base64');
      console.log(dataHex.toString('utf8'));
      await graphqlClient.mutate({
        mutation,
        variables: {
          value: dataHex.toString('utf8')
        }
      });
    }
/*
    event.Records.forEach(record => {
      //console.log(record)
      let dataHex = Buffer.from(record.Data, 'base64');
      console.log(dataHex.toString('utf8'));
      await graphqlClient.mutate({
        mutation,
        variables: {
          value: dataHex.toString('utf8')
        }
      });
      
      //console.log('Kinesis Record: %j', record.Data);
    }); */
    res += 'Successfully processed DynamoDB record';
  } else {
    res += 'Kinesis records not present in event';
  }

  return Promise.resolve(res);
};