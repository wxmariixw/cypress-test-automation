# Test automation to Dog Walk site
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/wxmariixw/dog-walker-automation-tests/blob/main/README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/wxmariixw/dog-walker-automation-tests/blob/main/README.en.md)

This project consists of test automation using **Cypress** for the [Dog Walk](https://walkdog.vercel.app/) website. This site simulates registration to become a Dog Walker.

## Prerequisites
- Cypress
- Node.js
- NPM

## Instalation
1. Clone this repository to your local enviroment:
``` bash
git clone https://github.com/wxmariixw/dog-walker-automation-tests.git
```
2. Browse to project directory:
```bash
cd dog-walk-automation-tests
```
3. Install the dependencies of the project:
```bash
npm install
```

### Util docs
I'll let here some documentations that could be utils:
- [Cypress](https://www.cypress.io/)
- [NPM](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en)

## Running the tests
- To run the tests by terminal, use this command:
```bash
npm run test
```
- To run the tests by Cypress GUI, use this command:
```bash
npm run gui-test
```
This will start Cypress and will run all the tests.

## Structure of the project
- cypress/downloads.
- cypress/e2e - Where are all the test plans
- cypress/fixtures - Media files, like images and PDF.
- cypress/support - Support files, like config and custom commands.

# Contribute
Feel free to contribute improvements to this project. Simply fork the repository, make your changes, and submit a pull request.
