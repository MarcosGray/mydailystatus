module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-4a074\",\"private_key_id\":\"02bb69bd9c0b8d0cdb0fe307dabdfac5a20951ed\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDmZAvOuXsxFGxt\\nRL6FNr4S26+HHvn5a7x01KEHfKiOQugfoiyEQtRZ3Sp7TG5mc/kCiH/3E7EAXcP8\\nQHYM4kWyjk1xwNVHEk9FR7i25p6UxRnTD3JQ53sLKqK3IlHdMCcs8loegHxFKNA/\\ni1TK74QCHtky2RJVu66P/BKTqEKo9VWlg2zSM3hpvAMLix8k9yd2V/nEn8ENb4h/\\nB/1+UZD84blxmMKT6DM3/dAyNFKDGYte+0o11DT936JfBLZEfZsupHC4JNZw3UJ4\\nqpje3IKJk8Ur3mrlpIY0fNu9CyGi3KWJkpzVP5zdhwttGN36AX8aLtI96RXRbqs1\\nyl/h99gxAgMBAAECggEAB9Goh62ac2cHOsJe8aoS43SUmYIs70jHcKLce/LAbPMS\\n+gtcxciXmLzpfZ2hf81C68HGj4Pp4Xp9LbcBlqR5g3LCSLh32ImT2oThjUYIhuGl\\nU6kaGuovPijWVL8nvnktVDB9q9w2E3oMDsMHl7tPHGwP+KJ+tX2JEiqGth+LUxzv\\nbRgXZ1/fQTsy0XSKOmIqAJdclmk9iTWUIyOhYC1ikrpuKM6Xe6KxxFN8uEpeHuj8\\nnjIRBJN6FpAlkSGpK0gWJwXYmxNMbK9T7rjKugcbq3OQf4sC7MRaJ+GzTYKpv2Gx\\n5rWpy2Xx093pQwikEyfsuhCoB10Z2qLcDl+B6C7IgQKBgQDzZSRaBKf0nxHJG046\\nySNLUuewUTqdZ0Y/crHPLP1wt1RrC8uE+VVoV8X5N/A5MTTMXG9PTZk85ulCUWfP\\nxaCm8hB4b0AEV6F+CuUcqbxEX8bc36ZVVjL9I/D9yXZnD9TQ5lqUZrLtrFJDBhkr\\nTCJdqw4x7FUOeMyEewMtauUvsQKBgQDyUn9QyYcnrCP5E8iXzGYa95DeLw3BzL/H\\njyh6YGe+OUd7u8IkuT+NPt8dhb2WjP3FApGYaOr+L2/YrhdUjOs4LNani5F7fwt0\\nqPawOyiqWUe+nNRy5tX9M1nxiX49lkC0+Ze45FM1v9QbaoNofjTkazhpeNkGzuTQ\\nbfUGOyvQgQKBgQCTVwHngHQQEI9at63mxkYYXgqlYLbj/FW5KPxclzahGkn/Nzev\\nuqQqMyBEWsmQRapZoAc98ZK3HG3OWKtISrGS/mxcC7SsLEQ1ofDKJjIzDeu7X6Q4\\neqMJPM2xRFjp0Nqazye8OGNOn4d4zWNFI6SWIWvJavCefyAHftQQlWpCMQKBgD/u\\n6i5bbXBXJ4qQ4KzEPfBBfxRP39ZQ+gxhxfE7vENhA24u5JMh2RWgD+fPIG03N8Eh\\n414N2GpGA8FsdTVWlLzWf6/mz/SAWXpnFeb7RMhlE9vDrv29z5mlUca7WvZOzTWy\\nYIhknVuiCAlPuen42mWlsFWLj98O+SnQyQPi2rWBAoGBANG7y5rdYCCZ+7o/AfCb\\nu/Mjnh6y/7wxRRRohKMavt03XeFt0ds/CTPvLe0eDoTsKV60HUoV7Vy1rH0D7lkE\\nIWPCdcUYqMOq1RnCYFS/7YXTylfJsIHYcm64E6/dA3uzveZOZ4z28RJ/d+31fFRZ\\n1z2KQKMaDgk3UlSUnNItrL5n\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-i8arg@mydailystatus-4a074.iam.gserviceaccount.com\",\"client_id\":\"102921745398294582834\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i8arg%40mydailystatus-4a074.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRECT,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    cookieLifetime: process.env.AUTH0_COOKIE_LIFE_TIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore); // isso é a mesma coisa que db: db

module.exports = {
  db
};

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/www/mydailystatus/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  });

  if (!props.isAuth) {
    return null;
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "App"), __jsx("pre", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, " ", JSON.stringify(props, null, 2), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);

  if (session) {
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc('2020-04-20').collection('checks').doc(session.user.sub).get();
    const todaysData = todaysCheckin.data();
    let forceCreate = true;

    if (todaysData) {
      // ver o checkins
      forceCreate = false;
    }

    return {
      props: {
        isAuth: true,
        user: session.user,
        forceCreate
      }
    };
  }

  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/www/mydailystatus/pages/app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map