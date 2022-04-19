# Bullet

This is the simplified version of the famous bulletproof-react. I rewrite it just for learning how to use some packages and the work flow, so there are no testing and other stuff related to deployment.

## Setup

I have to use craco to override the webpack.config.js of CRA, otherwise the absolute path won't work.

## API

This repo using msw and mswjs/data to mock up a server. Unfortunately, these two packages won't work well with CRA 5 because CRA 5 has removed polyfill of some module, such as 'http', 'https', 'stream'...So, I need to install those polifills package as the error instruction and set it up in the craco.config.js (which is used to override CRA webpack.config.js)

Remember to run npx msw init ./public --save to create mockServiceWorker file.

## Routes

- public routes
  - Home

- auth routes:
  - auth/
    - login/
    - register/

- protected routes:
  - dashboard/
    - discussions
    - users
    - profile

## Styles

- HeadlessUI (work perfectly with TailwindCSS)
- TailwindCSS

## Form and validation

- React Hook Form and Yup

## Steps

- Create routes
- Create Homepage
- Create Register and Login page and Layout (Layout is the common layout of register and login page). We still do nothing with the authentication yet.
- Do authentication
