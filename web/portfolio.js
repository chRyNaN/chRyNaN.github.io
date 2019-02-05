if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'portfolio'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'portfolio'.");
}
var portfolio = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('portfolio', _);
  return _;
}(typeof portfolio === 'undefined' ? {} : portfolio, kotlin);
