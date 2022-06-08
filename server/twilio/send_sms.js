const accountSid = process.env.TWILIO_ACCOUNTSID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const fromPhone = process.env.TWILIO_NUMBER;

const client = require('twilio')(accountSid, authToken);

const order = {
  name: 'Heather McLeod',
  phone: '16475807372',
  order: "biteme burger"
}

function sendClientConfirmation(order) {
  // Creates message to send to customer
  const message = {
    to: order.phone,
    from: twilioPhone,
    body: `Your order has been confirmed! You ordered the ${order.order}`
  };

// Sends the message to the customer
client.messages
  .create(message, (err, res) => {
    if (err) {
      console.log('error:', err);
    } else {
  console.log('message send successfully to confirm order')
  };
  })
}

sendClientConfirmation(order)
