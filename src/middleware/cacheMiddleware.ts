import { Request, Response, NextFunction } from "express";
import { redisClient } from "../utils/redisClient";

// middleware for caching the response of the request with redis
export const cacheMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // get the key from the request url
  const key = req.originalUrl;

  try {
    // check if the data is already cached
    const cachedData = await redisClient.get(key);

    if (cachedData) {
      // if the data is cached, return the cached data
      console.log("Cache Hit:", cachedData);
      res.status(200).json(JSON.parse(cachedData));
      return;
    }
    // if the data is not cached, cache the response
    const originalJson = res.json.bind(res);
    res.json = (body: any) => {
      redisClient
        .set(key, JSON.stringify(body), { EX: 60 })
        .then(() => console.log("Cache Set:", key))
        .catch((error) => console.error("Redis Set Error:", error));
      return originalJson(body);
    };

    next();
  } catch (error) {
    console.error("Redis Error:", error);
    // if an error occurs, continue to the next middleware
    next();
  }
};
