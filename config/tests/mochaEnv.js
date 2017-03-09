require('source-map-support/register');
require("babel-register")({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: /node_modules\/(?!htz.*).*/
});
require('jsdom-global')();
require('reflect-metadata');
window.Reflect = global.Reflect; // fix reflect made by jsdom to be same as the one shimmed by reflect-metadata shim

const chai = require('chai'),
  sinonChai = require('sinon-chai'),
  chaiAsPromised = require("chai-as-promised");

global.expect = chai.expect;
global.sinon = require('sinon');
chai.use(sinonChai);
chai.use(chaiAsPromised);

