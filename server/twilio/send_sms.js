// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC3207fceb06028f25b2d0977dbece3091';
const authToken = 'fbb6dd07cad870671ea4130e98170e82';
const twilioPhone = '19108386143'
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
