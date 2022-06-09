const express = require('express');
const router = express.Router();
const sendClientConfirmation = require('../server/twilio/send_sms');
const { Pool } = require('pg');

const pool = new Pool();

