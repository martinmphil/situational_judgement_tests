# Situational Judgement Tests demo

Test candidate values with [Situational Judgement Tests](https://en.wikipedia.org/wiki/Situational_judgement_test). 


## Demonstrator

![SJT_demo_picture](https://user-images.githubusercontent.com/37618836/80912292-e13de580-8d33-11ea-82a0-cb2444e200a3.jpg)

See [Situational Judgement Tests demonstrator app](https://www.greenstem.uk/demo/sjt/).

Mutual exclusivity in two dimensions ensures user can only pick a single best option and a single worst option, which must also differ from each other. 


## Start development server

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to preview this app with hot reloading of changes made to the source files. 

The TypeScript file `app/page.tsx` holds the app root. 


## Serve production build
`npm run build` 

`npm run start` 


## End-to-end automated testing
`npm run build` 

`npm run start` 

In new terminal 
`npm run test` 

### To step through end-to-end tests
`npx playwright test --project chromium --debug`

### Generating end-to-end tests
`npx playwright codegen`

## Updating 

In git checkout new branch. 

`npm update` 

`npm outdated` 

`npm install <package-name>@latest` 

Manually test and run end-to-end testing suite. 

If Playwright updated then execute `npx playwright install` and rerun end-to-end testing suite. 

Commit changes to git. Merge updated branch with main. Push to remote repository. 


## Next 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). 
