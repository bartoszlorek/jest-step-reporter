const VerboseReporter = require('@jest/reporters/build/verbose_reporter');

class JestStepReporter extends VerboseReporter.default {
  constructor(globalConfig) {
    super(globalConfig);
  }

  onRunStart(aggregatedResults, options) {
    console.log('onRunStart');

    super.onRunStart(aggregatedResults, options);
  }

  onTestStart(test) {
    super.onTestStart(test);
  }

  onRunComplete(contexts, aggregatedResults) {
    super.onRunComplete(contexts, aggregatedResults);
  }

  onTestResult(test, testResult, aggregatedResults) {
    super.onTestResult(test, testResult, aggregatedResults);
  }
}

module.exports = JestStepReporter;
