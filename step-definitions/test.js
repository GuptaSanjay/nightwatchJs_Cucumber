import { Given, When, Then, BeforeAll } from 'cucumber';
import { client } from 'nightwatch-api';

const testPage = client.page.testPage();


Given(/^I open Google's search page$/, async () => {
 await testPage.url();
});

Then(/^the title is "([^"]*)"$/, async (title) => {
  await testPage.validateTitle(title);
});

Then(/^the Google search form exists$/, async () => {
	await testPage.validateSerachBox();
});

/*BeforeAll(async () => {
  await loginPage.login();
});*/