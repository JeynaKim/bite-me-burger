const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const twilioPhone = process.env.TWILIO_NUMBER;
const recipient = process.env.NUMBER_TO_CALL;

const client = require('twilio')(accountSid, authToken);


function sendClientConfirmation(phone, orderTime) {
const message = {
    body: `Hello ${orderData.body.name}, Thank you for your Bite Me Burger order.
    This is a confirmation that your order has been accepted. You can pick it up in `,
    from: twilioPhone,
    to: recipient,
    };

    client.messages.create(options, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Confirmed order and sent to ${recipient}`)
      }
    })
  };

module.exports = { sendClientConfimation };
