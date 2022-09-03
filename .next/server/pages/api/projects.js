"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"Angular First Project","image":"/Angular.png","description":"TBT to my first Angular Project","tags":["node-js","angular","javascript","typescript"],"source_code":"https://github.com/OnishellT/Angular_First_Project"},{"id":2,"name":"Nest-js Bookmark CRUD API","image":"/Nest.png","description":"Bookmark CRUD API made with Nest-JS","tags":["angular","nest-js","backend","prisma","mongo-db","typescript","node-js","javascript"],"source_code":"https://github.com/OnishellT/nest-js_bookmark_crud_api"},{"id":3,"name":"Sistema Visitas","image":"/Laravel.png","description":"A reception system made with Laravel and SASS","tags":["node-js","php","mysql","laravel","sass","javascript"],"source_code":"https://github.com/OnishellT/Sistema_Visitas"},{"id":4,"name":"Sistema de Manejo de Contenedores","image":"/PHP.png","description":"A Container Tracking System With Web Scaping and API\'S","tags":["php","mysql","bootstrap","javascript","node-js"],"source_code":"https://github.com/OnishellT/Sistema-de-Manejo-de-Contenedores"},{"id":5,"name":"GAOP","image":"/Rust.png","description":"A Damage Calculator for the game Geshin Impact made with Vue and Rust as backend","tags":["vue","rust","docker","javascript","node-js"],"source_code":"https://github.com/OnishellT/GAOP"},{"id":6,"name":"Genshin Artifact Optimizer","image":"/Vue.png","description":"Yet Another Genshin Impact damage calculator","tags":["vue","javascript","node-js"],"source_code":"https://github.com/OnishellT/Genshin_ArtifactOptimizer"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();