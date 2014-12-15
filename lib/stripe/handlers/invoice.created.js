'use strict';
var stripe = require('stripe');
var Promise = require('promise');
var validateVAT = require('validate-vat');
var models = require('../../models');

function getVATByCountry(countrycode) {
  return Promise.resolve(0.2);
};

function countryIsInEU(countrycode) {
    var EU = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
    return EU.indexOf(countrycode.toUpperCase()) !== -1;
}

function getCountry(customer) {
  var card = customer.default_card; // jshint ignore:line

  var country = customer.cards.data.reduce(function (last, current) {
    if (current.id === card) {
      return current.country;
    } else {
      return last;
    }
  }, null);

  if (country === null) {
    if (customer.cards.data.length === 1) {
      return customer.cards.data[0].country;
    } else {
      // TODO multipile cards and no default ??
      return customer.cards.data[0].country;
    }
  } else {
    return country;
  }

}

module.exports = function (stripe) {

  return function (req, event, done) {

    done(null)

  };

};