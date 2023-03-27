import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, APIGatewayProxyResultV2, Context } from "aws-lambda";

export const Signup: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> => {
  // // console.log(event);
  // context.callbackWaitsForEmptyEventLoop = false;
  // console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
  // console.info("EVENT\n" + JSON.stringify(event, null, 2))
  // console.warn("Event not processed.", context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "successfully",
      data: []
    })
  };
}
