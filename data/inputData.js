"use strict";

import data from '../data/inputData.json';
//const fs = require('fs');
// const jsonData = fs.readFileSync('./data/inputData.json');
// const data = JSON.parse(jsonData);

module.exports = {
    selectRandomValue: function(input){
        let randomIndex = Math.floor(Math.random()*input.length);
        return input[randomIndex];
    },
    getOwnerFirstName: function(){
        return this.selectRandomValue(data.ownerFirstName);
    },

    getOwnerLastName: function(){
        return this.selectRandomValue(data.ownerLastName);
    },

    getOwnerDOB: function(){
        return this.selectRandomValue(data.ownerDateOfBirth);
    },

    getJointOwnerFirstName: function(){
        return this.selectRandomValue(data.jointOwnerFirstName)
    },

    getJointOwnerLastName: function(){
        return this.selectRandomValue(data.jointOwnerLastName);
    },

    getJointOwnerDOB: function(){
        return this.selectRandomValue(data.jointOwnerDateOfBirth);
    },

    getProducerName: function(){
       return this.selectRandomValue(data.producerName);
    },

    getURL: function(){
        return data.loginUrl
    },

    getUserName: function(){
        return data.userName
    },

    getPassword: function(){
        return data.password
    }
}
