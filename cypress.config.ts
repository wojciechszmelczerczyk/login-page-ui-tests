import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      base_url: "http://uitestingplayground.com",
      sample_app_url: "http://uitestingplayground.com/sampleapp",
    },
  },
});
