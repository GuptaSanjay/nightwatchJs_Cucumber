"use strict";
let scenarioSesseion = new Map();

module.exports = {
    setProductName: function(productValue){
        scenarioSesseion.set('productName',productValue);
    },

    getProductName: function(){
       return scenarioSesseion.get('productName');
    },
    
    setOwnershipType: function(ownershipType){
        scenarioSesseion.set('ownershipType',ownershipType);
    },

    getOwnershipType: function(){
        return scenarioSesseion.get('ownershipType');
    },

    setSelectedState: function(solicitationState){
        scenarioSesseion.set('solicitationState',solicitationState);
    },

    getSelectedState: function(){
        return scenarioSesseion.get('solicitationState');
    },

    setAnnuity: function(annuityType){
        scenarioSesseion.set('annuityType',annuityType);
    },

    getAnnuityType: function(){
        return scenarioSesseion.get('annuityType');
    },

    setWithdrawalType: function(withdrawal){
        scenarioSesseion.set('withdrawal',withdrawal);
    },

    getWithdrawalType: function(){
        return scenarioSesseion.get('withdrawal');
    },

    setDeathBenifityType: function(deathBenifitType){
        scenarioSesseion.set('deathBenifitType',deathBenifitType);
    },

    getDeathBenifitType: function(){
        return scenarioSesseion.get('deathBenifitType');
    },

    setPlannedValue: function(amount){
        scenarioSesseion.set('amount',amount);
    },

    getPlannedValue: function(){
        return scenarioSesseion.get('amount');
    },

    setWithdrawalOption: function(withdrawalOption){
        scenarioSesseion.set('withdrawalOption',withdrawalOption);
    },

    getWithdrawalOption: function(){
        return scenarioSesseion.get('withdrawalOption')
    }
}