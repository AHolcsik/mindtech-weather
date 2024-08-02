This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setting up project

First, fork and set up the repository
(for further information, check [here] (https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) )

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding the API key

Head over to [OpenWheater](https://openweathermap.org/) and Sign Up a new profile.

Navigate to [API keys](https://home.openweathermap.org/api_keys) and generate a new one.

(The activation of the API key make take some time, be patiante)

In the root folder create a .env.local file and paste the new key with the name of 'WEATHER_API_KEY'.
