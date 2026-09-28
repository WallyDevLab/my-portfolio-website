import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

// Only enabled when Upstash env vars are configured, so local/dev setups
// without a Redis instance don't crash — the contact route just skips rate limiting.
export const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "contact-form",
      })
    : null
