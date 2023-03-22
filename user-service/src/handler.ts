import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Signup = (event: APIGatewayProxyEventV2) => {
  console.log(event);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      // "Content-Type": "text/html"
    },
    body: JSON.stringify({ message: 'Response for signup', data: { success: true } })
  }

}
