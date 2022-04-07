# DevCycleReact

[![Build Main](https://github.com/markcallen/devcyclereact/actions/workflows/build-main.yml/badge.svg?branch=main)](https://github.com/markcallen/devcyclereact/actions/workflows/build-main.yml)

Library of examples on how to use DevCycle in a React/NextJS application.

## Getting Started

First, run the development server:

```bash
yarn
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Docker

Build the docker container

```bash
docker build -t devcyclereact .
```

Run

```bash
docker run -p 3000:3000 -d devcyclereact:latest
```
