import {client} from 'nightwatch-api';

const SEARCH_BOX = './/input[@name="q"]';

module.exports = {
    commands:[
        {
        	url() {
       	   return this.api
          .pause(2000)
          .url(client.launch_url)
		  .pause(2000)
        	},
			validateTitle(value){
				return this.api
				.assert.title(value);
			},
			validateSerachBox(){
				return this.api
				.waitForElementVisible(SEARCH_BOX,3000)
				.assert.visible(SEARCH_BOX)
			}
		}
    ]
}