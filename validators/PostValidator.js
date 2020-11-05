const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      body: Joi.string().required(),
      image: Joi.string(),
      date: Joi.date(),
      permission: Joi.string().valid('PUBLIC', 'PRIVATE'),
    }),
  }),
  getPosts: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
    }),
  }),
  getPost: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      idPost: Joi.string().required(),
    }),
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      idPost: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string(),
      body: Joi.string(),
      image: Joi.string(),
      permission: Joi.string().valid('PUBLIC', 'PRIVATE'),
    }),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      idUser: Joi.string().required(),
      idPost: Joi.string().required(),
    }),
  }),
};
