# AI Interview Platform

The repository contains a React/Vite Google sign-in client and an Express/MongoDB authentication API.

## Client

```sh
cd react/my-react-app
cp .env.example .env
npm ci
npm run dev
```

Set `VITE_GOOGLE_CLIENT_ID` to a Google OAuth web client ID and `VITE_API_URL` to the API origin in `react/my-react-app/.env`.

## API

```sh
cd server
cp .env.example .env
npm ci
npm run dev
```

Set `GOOGLE_CLIENT_ID` to the same Google OAuth web client ID, `MONGODB_URI` to a reachable MongoDB database, and `JWT_SECRET` to a long random value in `server/.env`. The API listens on port `4000` by default.

Do not commit either `.env` file. The `.env.example` files contain placeholders only.