import { Joi } from 'celebrate';

export const registerUserSchema = {
  body: Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string().min(8).required(),
  }),
};

export const loginUserSchema = {
  body: Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string().required(),
  }),
};

export const requestResetEmailSchema = {
  body: Joi.object({
    email: Joi.string().email().required().trim(),
  }),
};

export const resetPasswordSchema = {
  body: Joi.object({
    token: Joi.string().required(),
    password: Joi.string().min(8).required(),
  }),
};
