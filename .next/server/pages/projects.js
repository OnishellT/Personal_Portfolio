(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProjectCard_card__Ilp8p",
	"content": "ProjectCard_content__SHdnM",
	"tags": "ProjectCard_tags__Atl1P",
	"cta": "ProjectCard_cta__J86_O",
	"underline": "ProjectCard_underline__IoTds"
};


/***/ }),

/***/ 9872:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProjectsPage_container__f2WwY"
};


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/ProjectCard.module.css
var ProjectCard_module = __webpack_require__(7068);
var ProjectCard_module_default = /*#__PURE__*/__webpack_require__.n(ProjectCard_module);
;// CONCATENATED MODULE: ./components/ProjectCard.jsx



const ProjectCard = ({ project  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProjectCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: project.image,
                height: 300,
                width: 600,
                alt: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProjectCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: project.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).tags,
                        children: project.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: tag,
                                children: tag
                            }, tag))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).cta,
                        children: project.source_code && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: project.source_code,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (ProjectCard_module_default()).underline,
                            children: "Source Code"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

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

// EXTERNAL MODULE: ./styles/ProjectsPage.module.css
var ProjectsPage_module = __webpack_require__(9872);
var ProjectsPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsPage_module);
;// CONCATENATED MODULE: ./pages/projects.jsx




const ProjectsPage = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Stuff I've Built So Far"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProjectsPage_module_default()).container,
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        project: project
                    }, project.id))
            })
        ]
    });
};
async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            title: "Projects",
            projects
        }
    };
}
/* harmony default export */ const pages_projects = (ProjectsPage);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675], () => (__webpack_exec__(5761)));
module.exports = __webpack_exports__;

})();