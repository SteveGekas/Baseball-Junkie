exports.handler = function (context, event, callback) {
    const twilioAccountSid = context.ACCOUNT_SID;
    const twilioApiKey = context.API_KEY;
    const twilioApiSecret = context.API_SECRET;
    const identity = event.identity;

    const AccessToken = Twilio.jwt.AccessToken;

    const token = new AccessToken(
        twilioAccountSid,
        twilioApiKey,
        twilioApiSecret,
        { identity: identity }
    );

    const ChatGrant = AccessToken.ChatGrant;

    const chatGrant = new chatGrant({
        serviceSid: context.SERVICE_SID,
    });

    token.addGrant(chatGrant);

    const response = new Twilio.Response();
    const headers = {
        "Access-Control-Allow-Origin": "*", // change this to your client-side URL
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
    };

    response.setHeaders(headers);
    response.setBody({
        accessToken: token.toJwt()
    });

    return callback(null, response);
}