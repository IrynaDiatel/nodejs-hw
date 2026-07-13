import { Joi } from 'celebrate';

export const registerUserSchema = {
  body: Joi.object({
    username: Joi.string().trim(),
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
