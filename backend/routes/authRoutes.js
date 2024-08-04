const express = require('express');
const authControllers = require('../controllers/auth/authControllers');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12),
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

const router = express.Router();

router.post(
  '/register',
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post(
  '/login',
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

module.exports = router;

// Joi는 객체 스키마 validation을 해주는 기능을 제공
// react-hook-form같은 라이브러리
