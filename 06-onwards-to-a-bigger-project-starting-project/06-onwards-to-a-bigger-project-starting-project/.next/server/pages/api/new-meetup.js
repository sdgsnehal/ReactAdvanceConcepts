"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://sdgsnehal:6pX8gfKGuCMzG1E1@cluster0.zutjjrv.mongodb.net/?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"meetup inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFDdEMsZUFBZUMsUUFBU0MsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDNUIsSUFBR0QsSUFBSUUsTUFBTSxLQUFHLFFBQU87UUFDckIsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixNQUFNQyxTQUFRUCx3REFBbUIsQ0FBQztRQUNsQyxNQUFNUyxLQUFLRixPQUFPRSxFQUFFO1FBQ3BCLE1BQU1DLG9CQUFvQkQsR0FBR0UsVUFBVSxDQUFDO1FBQ3hDLE1BQU1DLFNBQVMsTUFBTUYsa0JBQWtCRyxTQUFTLENBQUNSO1FBQ2pEUyxRQUFRQyxHQUFHLENBQUNIO1FBQ1pMLE9BQU9TLEtBQUs7UUFDWmIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFRO1FBQWlCO0lBQ2pELENBQUM7QUFFTDtBQUNBLGlFQUFlbEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLHJlcyl7XHJcbiAgICBpZihyZXEubWV0aG9kPT09J1BPU1QnKXtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2xpZW50PSBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3NkZ3NuZWhhbDo2cFg4Z2ZLR3VDTXpHMUUxQGNsdXN0ZXIwLnp1dGpqcnYubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6J21lZXR1cCBpbnNlcnRlZCd9KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();