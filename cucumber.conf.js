import fs from 'fs';
import { setDefaultTimeout, After, AfterAll, BeforeAll } from 'cucumber';
import {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots
} from 'nightwatch-api';
import reporter from 'cucumber-html-reporter';

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chrome_cloud' });
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'https://illustration.test.globalbankers.net/',
        'Browser': 'Chrome 83.0.4103.116',
        'Platform': 'Windows 10' 
      }
    });
  }, 1000);
});

After( function() {
  getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});