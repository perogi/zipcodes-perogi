module.exports = function(config) {
  config.set({
    mutate: [
      "lib/index.js",
      "!lib/codes.js",
      "!lib/states.js"
    ],
    mutator: "javascript",
    maxConcurrentTestRunners: 2,
    packageManager: "npm",
    reporters: ["clear-text", "progress", "dashboard"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mochaOptions: {
      files: "test/**/*.js",
      timeout: 5000
    }
  });
};
