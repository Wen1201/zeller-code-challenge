const awsconfig = {
  aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.AWS_APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.AWS_APPSYNC_API_KEY,
};

export default awsconfig;
