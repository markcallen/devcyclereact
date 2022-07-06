# DevCycleReact

[![Build Main](https://github.com/markcallen/devcyclereact/actions/workflows/build-main.yml/badge.svg?branch=main)](https://github.com/markcallen/devcyclereact/actions/workflows/build-main.yml)

Library of examples on how to use DevCycle in a React/NextJS application.

## Demo Site

https://devcyclereact.vercel.app/

## Getting Started

First, run the development server:

```bash
yarn
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Examples

### Getting Started

First create an account on devcycle
https://docs.devcycle.com/docs/home/feature-management/getting-started/creating-an-account

Then get the dev environment key `Account -> Settings -> Environments & Keys`
and update the variable DevCycleKey in `next.config.js`

### Non-Boolean Feature Flag

Feature flags aren’t just booleans that turn on or off a feature based upon
their value. They can be used to evaluate expressions such as the version of the
application, compare a value to a string, or as this example will look at based
upon the date and time.

This came from a question that we addressed on Stackoverflow,
https://stackoverflow.com/questions/70360690/how-to-support-future-feature-flags-eg-the-site-will-shut-down-in-10-min
that asked the questions about using a Feature Flag to show that the site will
be shut down at a specific time and then disable the site at that time.

This can be accomplished by using a Feature Flag that when enabled disables the
site, but this very boolean step does meet the objective of informing the user
that the site will shut down shortly. By moving away from just looking at
Feature Flags as either on or off and using an integer both requirements can be
met.

The solution is to use a feature flag that is based upon a timestamp, the time
to shut down the site, and if that flag is enabled different messages can be
displayed to the user just before the shutdown and then the site can be disabled
after that.

Create a new Feature Flag called `time-of-site-to-go-down`
https://docs.devcycle.com/docs/home/feature-management/getting-started/your-first-feature

Set the value to be 5 minutes from now, in milliseconds

Get this from the command line using:

```
echo $((($(date +%s)+300)*1000))
```

Don’t forget to save

## Docker

Build the docker container

```bash
docker build -t devcyclereact .
```

Run

```bash
docker run -p 3000:3000 -d devcyclereact:latest
```
