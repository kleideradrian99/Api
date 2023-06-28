const { IncomingWebhook } = require('@slack/webhook')

const slackConect = new IncomingWebhook(process.env.SLACK_WEBHOOK);
const loggerStream = {
    write: message => {
        slackConect.send({
            text: message
        })
    },
};

module.exports = loggerStream