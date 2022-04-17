# Bullet

This is the simplified version of the famous bulletproof-react. I rewrite it just for learning how to use some packages and the word flow, so I have removed the testing and other stuff related to deployment.

## Setup

I have to use craco to override the tsconfig of CRA, otherwise the absolute path won't work.

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

- HeadlessUI
- TailwindCSS

## Form and validation

- React Hook Form and Yup

## Steps

- Create routes
- Create Homepage
- Create Register and Login page and Layout (Layout is the common layout of register and login page). We still do nothing with the authentication yet.
- Do authentication
