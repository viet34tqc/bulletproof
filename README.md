# Bullet

This is the simplified version of the famous bulletproof-react. I rewrite it just for learning how to use some packages and the work flow, so there are no testing and other stuff related to deployment.

## Setup

I have to use craco to override the webpack.config.js of CRA, otherwise the absolute path won't work (This only happens when you use CRA v5)

## Difference from bulletproof-react

- Routes: I decided to seperate routes into 3 categories instead of 2: authentication routes, protected routes and public routes (which can be homepage, blog...). If the route has its own child route, it will have a component name like: <AuthRoute> to render the <Outlet>
- Use `mutation` instead of `mutationAync` to handle the POST request (login, register). For more details: <https://tkdodo.eu/blog/mastering-mutations-in-react-query>
- Slightly different folder structure: I categorize features by both pages and features.
- Using `yup` for form validation instead of `zod`
- Simplify components: I have removed some components I think is redundant, like: FormDrawer...
- Remove React Helmet: if you want to apply SEO on your web app, try another solutions like NextJS
- Using react-toastify instead of storing the notifications into global state
- Packages are up to date: CRA 5, Tailwind CSS 3.

## API

This repo using msw and mswjs/data to mock up a server. Unfortunately, these two packages won't work well with CRA 5 because CRA 5 has removed polyfill of some modules, such as 'http', 'https', 'stream'...So, I need to install those polifills as the error instruction and set it up in the craco.config.js (which is used to override CRA webpack.config.js)

Remember to run `npx msw init ./public --save` to create mockServiceWorker file.

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
      - /id
    - users
    - profile

If the route has its own child route, it will have a component name like: <AuthRoute> to render the <Outlet>

## Styles

- HeadlessUI (works perfectly with TailwindCSS)
- HeroIcons
- TailwindCSS

## Form and validation

- React Hook Form and Yup

## Steps

- Create routes
- Create Homepage
- Create Register and Login page and Layout (Layout is the common layout of register and login page). We still do nothing with the authentication yet.
- Do authentication

## Authentication

User login or register => If success, a token is assigned and saved in localStorage => User is navigate to the dashboard.

If the user refresh the page or go to other page, the app will check if the user is logged in and he can use this token for authentication.

AuthContext will always run first, so does the query for loading user. It's this query to check if the user is logged in.

## Button actions

- Click -> loading
  - then wait for Success:
    - drawer or dialog remove
    - wait for invalidateQuery
    - toast

## Authorization

We have 2 authorization criterias: roles and policies

## TODO

<https://tkdodo.eu/blog/effective-react-query-keys>
