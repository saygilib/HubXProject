import Joi from "joi";

// Joi schema for validating the request body of the movie endpoint
export const movieSchemaValidate = Joi.object({
  title: Joi.string().required(),
  genre: Joi.string().required(),
  description: Joi.string().required(),
  releaseDate: Joi.date().required().max("now"),
  rating: Joi.number().min(0).max(10).required(),
  imdbId: Joi.string().required(),
  director: Joi.string().required(),
});

// Joi schema for validating the request body of the director endpoint
export const directorSchemaValidate = Joi.object({
  firstName: Joi.string().required(),
  secondName: Joi.string().required(),
  birthDate: Joi.date().required().max("now"),
  bio: Joi.string().required(),
});
