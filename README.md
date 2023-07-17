# Hexagonal 2048

## DEPLOY
[HEX 2048 Implementation](https://demonic-trick.surge.sh/)

## Package scripts description

* `npm run start` - starts dev server with game. The page will be reloaded on each code update.
* `npm run build` - builds the production version of game.
* `npm run start-server` - starts rng-server locally.
* `npm run test:unit` - starts unit tests from `/src` folder.
* `npm run test:local` - starts tests for the game. This command expects that dev-server with the game is launched and local rng-server not. These tests use [puppeteer](https://github.com/puppeteer/puppeteer) for tests game in a browser.
* `npm run test` - starts production tests. This command use port 3000, so please leave it free if you try to use this command. The production tests also use [puppeteer](https://github.com/puppeteer/puppeteer).
