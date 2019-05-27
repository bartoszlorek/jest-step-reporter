const VerboseReporter = require('@jest/reporters/build/verbose_reporter');

const passIcon = '✓';
const failIcon = '✕';

const currentSteps = [];

class JestStepReporter extends VerboseReporter.default {
  constructor(globalConfig) {
    super(globalConfig);
  }

  static step(description, fn) {
    currentSteps.push(description);
    fn();
  }

  onRunStart(aggregatedResults, options) {
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
