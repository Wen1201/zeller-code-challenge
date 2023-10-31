const awsconfig = {
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.REACT_APP_AWS_REGION,
  aws_appsync_authenticationType: process.env.REACT_APP_AWS_AUTH_TYPE,
  aws_appsync_apiKey: process.env.REACT_APP_AWS_API_KEY,
};

export default awsconfig;
