// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    // That's the status code which will be returned when the function is executed to indicates that everything is OK
    body: JSON.stringify({
      msg: "Hello, World! ",
    }),
  })
}
