module.exports = [
  "./bestPractices",
  "./errors",
  "./es6",
  "./node",
  "./stylistic",
]
  .map(function(path) {
    return require(path);
  })
  .reduce(
    function(config, rules) {
      Object.assign(config.rules, rules);
      return config;
    },
    { rules: {} }
  );
