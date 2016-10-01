/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar greeter = __webpack_require__(2);\ndocument.getElementById('root').appendChild(greeter());\n\ndocument.write('Bad news,my phone crashed!');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvaW5kZXguanM/NmYzMCJdLCJuYW1lcyI6WyJncmVldGVyIiwicmVxdWlyZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsIndyaXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVUsbUJBQUFDLENBQVEsQ0FBUixDQUFoQjtBQUNBQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxXQUFoQyxDQUE0Q0osU0FBNUM7O0FBRUFFLFNBQVNHLEtBQVQsQ0FBZSw0QkFBZiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3JlZXRlciA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmFwcGVuZENoaWxkKGdyZWV0ZXIoKSk7XG5cbmRvY3VtZW50LndyaXRlKCdCYWQgbmV3cyxteSBwaG9uZSBjcmFzaGVkIScpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NvdXJjZS9qcy9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nmodule.exports = function () {\n    var greet = document.createElement('div');\n    greet.textContent = \"Hi there and greetings!\";\n    return greet;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbW9kdWxlLmpzP2M5OTMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImdyZWV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUIsWUFBVztBQUN4QixRQUFJQyxRQUFRQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUYsVUFBTUcsV0FBTixHQUFvQix5QkFBcEI7QUFDQSxXQUFPSCxLQUFQO0FBQ0gsQ0FKRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZ3JlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmVldC50ZXh0Q29udGVudCA9IFwiSGkgdGhlcmUgYW5kIGdyZWV0aW5ncyFcIjtcbiAgICByZXR1cm4gZ3JlZXQ7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zb3VyY2UvanMvbW9kdWxlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);