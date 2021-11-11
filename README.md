# Requirements

Node >= 12.0.0
NPM >= 6.0.0

# Instructions

## Make sure everything is working

1. [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/trumbitta/gitpod-webpack-dev-server-proxy-repro)
1. First terminal: `nx serve backend`
1. Second terminal: `nx serve frontend`

Point your browser at http://whatever:4200 and you should see this:

![image](https://user-images.githubusercontent.com/462705/141323549-2a7e7e7d-5b5f-43e5-afe9-8a226ef91907.png)

## Break it (the use case I'm trying to get help for)

1. Clone the repo local on your computer: `git clone https://github.com/trumbitta/gitpod-webpack-dev-server-proxy-repro.git`
1. Install deps: `npm install && npm i -g @nrwl/cli`
1. Launch the backend: `nx serve backend`
1. Point your browser to http://localhost:3333/api and you should see ![image](https://user-images.githubusercontent.com/462705/141324127-ba2cc7fa-276f-4ae9-9e27-bf543636deb5.png)
1. Keep this open 
1. [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/trumbitta/gitpod-webpack-dev-server-proxy-repro)
1. Open with VSCode Desktop Support: `shift cmd p` then choose `Gitpod: Open in VSCode` 
1. Open a terminal in your VSCode instance that's connected to Gitpod and launch: `nx serve frontend`
1. Point your browser at http://localhost:4200 and the app should break because the gitpodified frontend can't reach the local backend. You should also have these error logs in the VSCode terminal: `<e> [webpack-dev-server] [HPM] Error occurred while proxying request localhost:4200/api to http://localhost:3333/ [ECONNREFUSED] (https://nodejs.org/api/errors.html#errors_common_system_errors)`
