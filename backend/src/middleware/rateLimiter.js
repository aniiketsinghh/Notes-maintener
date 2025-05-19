import ratelimit from "../config/upstash.js";


const rateLimiter= async (req, res, next) => {
    try{

        // i wrote my-limit-key just as a text 
        // you can write here userid if you have authenticated 
        // then use (userid) instead of ("my-limit-key")
        const {success}= await ratelimit.limit("my-limit-key")

        if(!success) {
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }

    }catch (error) {
        console.error("error in rateLimiter", error)
        res.status(500).json({ message: 'Error in rate limiter', error });
    }

}

//also import it at server.js file
export default rateLimiter;