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
  .reduce(function(rules, config) {
    return Object.keys(config).reduce(function(subRules, ruleName) {
      subRules[ruleName] = config[ruleName];
      return subRules;
    }, rules);
  }, {});
