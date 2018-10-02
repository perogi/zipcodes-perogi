module.exports = function(config) {
  config.set({
    mutate: [
      "lib/index.js",
      "!lib/codes.js",
      "!lib/states.js"
    ],
    testRunner: "mocha",
    testFramework: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporters: ["clear-text", "progress", "dashboard"],
    coverageAnalysis: "perTest",
    mochaOptions: {
      files: "test/**/*.js",
      timeout: 5000
    }
  });
};
