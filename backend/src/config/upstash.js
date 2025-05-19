//rate limiting means we can only make a certain number of requests to the database in a given time period
//this is a rate limiting middleware for express
import {Ratelimit} from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';
dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, '60 s'),
});

export default ratelimit;