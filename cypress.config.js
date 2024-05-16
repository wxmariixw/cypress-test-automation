const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://walkdog.vercel.app/',
  },
  fixturesFolder: false,
  video: false,
})