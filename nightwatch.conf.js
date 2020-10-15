  const chromedriver = require('chromedriver');
  const seleniumServer = require('selenium-server-standalone-jar');
  
  module.exports = {
    disable_colors: true,
    silent: !process.env.NIGHTWATCH_VERBOSE,
    test_settings: {
      chrome_cloud: {
        selenium: {
          start_process: false,
          cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
          },
        },
        globals: {
          waitForConditionTimeout: 45000,
          request_timeout_options: { timeout: 100000, retry_attempts: 5 },
        },
        selenium_port: 4444,
        selenium_host: 'localhost',
        default_path_prefix: '/wd/hub',
        page_objects_path: 'page-objects',
        use_xpath: true,
        desiredCapabilities: {
          browserName: 'chrome',
          acceptSslCerts: true,
          acceptInsecureCerts: true,
          chromeOptions: {
            w3c: false,
            args: ['disable-web-security', 'allow-running-insecure-content', '--headless', '--window-size=1920,1080'],
            perfLoggingPrefs: {
              enableNetwork: true,
            },
          },
          'goog:loggingPrefs': { driver: 'ALL', server: 'ALL', browser: 'ALL', performance: 'ALL' },
        },
        launch_url: 'https://www.google.co.in/',
      },
    },
  };
  
