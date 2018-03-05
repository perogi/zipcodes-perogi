module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "lib/index.js",
        mutated: true,
        included: false
      },
        {
            pattern: "lib/codes.js",
            mutated: false,
            included: true
        },
        {
            pattern: "lib/states.js",
            mutated: false,
            included: true
        },
      "tests/**/*.js"
    ],
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["clear-text", "progress", "dashboard"],
    testFramework: "mocha",
    coverageAnalysis: "perTest"
  });
};
