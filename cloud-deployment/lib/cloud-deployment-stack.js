const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');

const lambda = require('aws-cdk-lib/aws-lambda');
const apigateway = require('aws-cdk-lib/aws-apigateway');
const path = require('path');

class CloudDeploymentStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Lambda Funktion
    const backendFunction = new lambda.Function(this, 'BackendFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../backend')),
      environment: {
        MONGO_URI: process.env.MONGO_URI
      },
    });

    // API Gateway
    const api = new apigateway.RestApi(this, 'SubmissionApi', {
      restApiName: 'Submission Service',
    });

    const submissions = api.root.addResource('submit'); // /submit
    submissions.addMethod('POST', new apigateway.LambdaIntegration(backendFunction));
  }
}

module.exports = { CloudDeploymentStack };
