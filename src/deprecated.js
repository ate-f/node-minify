/*!
 * node-minify
 * Copyright(c) 2011-2017 Rodolphe Stoclin
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var deprecate = require('depd')('node-minify');

/**
 * Expose `deprecated()`.
 */

export { deprecated };

/**
 * Deprecate some old syntax.
 *
 * @param {Object} constructor
 * @param {Object} settings
 */

function deprecated(constructor, settings) {
  if (constructor) {
    deprecate(
      'Instantiate is no longer necessary.\n' +
        'new compressor.minify() is deprecated.\n' +
        'Please use:\n' +
        '\n' +
        '  var compressor = require("node-minify");\n' +
        '  compressor.minify();\n' +
        '\n'
    );
  }

  if (settings.type) {
    deprecate('type was renamed to compressor');
  }

  if (settings.fileIn) {
    deprecate('fileIn was renamed to input');
  }

  if (settings.fileOut) {
    deprecate('fileOut was renamed to output');
  }
}
