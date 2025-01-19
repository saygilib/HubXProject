import { createClient } from "redis";

// create a redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

// log the error if the client encounters an error
redisClient.on("error", (err) => console.error("Redis Client Error", err));

// log a message when the client connects to redis
const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("Connected to Redis");
  }
};

export { redisClient, connectRedis };
