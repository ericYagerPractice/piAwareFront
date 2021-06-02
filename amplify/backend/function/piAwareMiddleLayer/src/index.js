exports.handler = async function (event) {
  
  const appsync = require('aws-appsync');
  const gql = require('graphql-tag');
  require('cross-fetch/polyfill');
  
  let res = '';

  let dataJSON = "this should trigger something"
  
  try{
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

    let returnedUUID = await graphqlClient.mutate({
        mutation,
        variables: {
          value: event
        }
      });
    res+="Graphql operation executed successfully " + JSON.stringify(returnedUUID) + "for data: " + JSON.stringify(event)
  } 
  catch(error){
    res+="Error processing graphql mutation" + error
  }

  return Promise.resolve(res);
};