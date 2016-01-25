var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
    appVersion: '1.0',
    language: 'en',
    platform: 'MacIntel',
    userAgent: 'node.js'
};
global.window.navigator = global.navigator;
