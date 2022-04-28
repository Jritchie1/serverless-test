"use strict";

const goodbye = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Goodbye from Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  handler: goodbye
}