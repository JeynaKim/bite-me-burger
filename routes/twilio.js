const express = require('express');
const router = express.Router();
const sendClientConfirmation = require('../server/send_sms.js');
const { Pool } = require('pg');

const pool = new Pool();


function retrievePhoneNumberAndSendSMS(orderID, time) {
  return pool.query (`
  SELECT *
  FROM orders
  WHERE id = orderID `)
   .then(() => {

    sendClientConfirmation(phoneNumber, time);
  });
}

retrievePhoneNumberAndSendSMS()
