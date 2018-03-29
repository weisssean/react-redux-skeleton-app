
process.env.NODE_ENV = 'test';

require('babel-register')();
require.extensions['.css'] = () => {
  return;
};

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

const { document } = (new JSDOM('')).window;
global.document = document;

global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});



Enzyme.configure({ adapter: new Adapter() });


global.navigator = {
    userAgent: 'node.js'
};

window.documentRef = document;