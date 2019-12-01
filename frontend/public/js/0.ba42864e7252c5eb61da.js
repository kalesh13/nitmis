webpackJsonp([0],{

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(225)
/* template */
var __vue_template__ = __webpack_require__(238)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/admin/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73d837d2", Component.options)
  } else {
    hotAPI.reload("data-v-73d837d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_upcoming__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_upcoming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__events_upcoming__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard",
  data: function data() {
    return {};
  },
  components: { UpcomingEvents: __WEBPACK_IMPORTED_MODULE_0__events_upcoming___default.a }
});

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(227)
/* template */
var __vue_template__ = __webpack_require__(237)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/events/upcoming.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15a4fe52", Component.options)
  } else {
    hotAPI.reload("data-v-15a4fe52", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventSummary__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventSummary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventSummary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__details__);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "upcoming_event",
  data: function data() {
    return {
      events: [{ id: 1, name: "Business Fest", stage: "Location sample 1", details: "Location sample 1", schedule: "11/09/2020 12:30" }, { id: 2, name: "Demo Fets", stage: "Location sample 2", details: "Location sample 1", schedule: "15/09/2020 14:30" }, { id: 3, name: "Management Fest", stage: "Location sample 3", details: "Location sample 1", schedule: "17/09/2020 11:30" }, { id: 4, name: "Sample Fest", stage: "Location sample 4", details: "Location sample 1", schedule: "16/09/2020 22:30" }, { id: 5, name: "Business Fest", stage: "Location sample 1", details: "Location sample 1", schedule: "11/09/2020 12:30" }, { id: 6, name: "Demo Fets", stage: "Location sample 2", details: "Location sample 1", schedule: "15/09/2020 14:30" }, { id: 7, name: "Management Fest", stage: "Location sample 3", details: "Location sample 1", schedule: "17/09/2020 11:30" }, { id: 8, name: "Sample Fest", stage: "Location sample 4", details: "Location sample 1", schedule: "16/09/2020 22:30" }],
      selectedIndex: 0
    };
  },
  computed: {
    selectedEvent: function selectedEvent() {
      return this.events[this.selectedIndex || 0];
    }
  },
  components: { EventSummary: __WEBPACK_IMPORTED_MODULE_0__eventSummary___default.a, EventDetails: __WEBPACK_IMPORTED_MODULE_1__details___default.a }
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(229)
/* template */
var __vue_template__ = __webpack_require__(233)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/events/eventSummary.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cec71e7", Component.options)
  } else {
    hotAPI.reload("data-v-4cec71e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_icon__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__user_icon__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "event_summary",
  props: {
    event: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    strippedName: function strippedName() {
      var name = this.event.name;
      return name ? name.substring(0, 50) : "Event";
    }
  },
  components: { icon: __WEBPACK_IMPORTED_MODULE_0__user_icon___default.a }
});

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(231)
/* template */
var __vue_template__ = __webpack_require__(232)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/user/icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-084e5c02", Component.options)
  } else {
    hotAPI.reload("data-v-084e5c02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "icon",
  props: ["title"],
  computed: {
    bg: function bg() {
      var colors = ["#c33174", "#b818ec", "#186dec", "#ec8d18", "#41ab2e", "#2e88ab"];

      return { background: colors[Math.floor(Math.random() * 6)] };
    },
    character: function character() {
      return this.title ? this.title.charAt(0) : "ABCDEFGHIJKLM".charAt(Math.floor(Math.random() * 13));
    }
  }
});

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "icon",
    style: _vm.bg,
    domProps: { textContent: _vm._s(_vm.character) }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-084e5c02", module.exports)
  }
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "event-summary",
      class: { clickable: !_vm.selected, selected: _vm.selected },
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.$emit("clicked")
        }
      }
    },
    [
      _c("icon", { attrs: { title: _vm.event.name } }),
      _c("div", { staticClass: "details col-md-8" }, [
        _c("div", {
          staticClass: "name",
          domProps: { textContent: _vm._s(_vm.strippedName) }
        }),
        _c("div", { staticClass: "location" }, [
          _c("span", { staticClass: "fa fa-map-marker mr-2" }),
          _vm._v(_vm._s(_vm.event.stage))
        ])
      ]),
      _c("div", {
        staticClass: "time",
        domProps: { textContent: _vm._s(_vm.event.schedule) }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cec71e7", module.exports)
  }
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(235)
/* template */
var __vue_template__ = __webpack_require__(236)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/events/details.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d5e1057", Component.options)
  } else {
    hotAPI.reload("data-v-7d5e1057", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "event_details",
  props: ["event"],
  computed: {
    hasEvent: function hasEvent() {
      return this.event && (this.event.name || this.event.schedule || this.event.details);
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-item" }, [
    _c("div", {
      staticClass: "title h1 mb-2 pl-4",
      domProps: { textContent: _vm._s(_vm.event.name) }
    }),
    _c(
      "div",
      { staticClass: "card-content pl-4 limit-400" },
      [
        _vm.hasEvent
          ? [
              _c("div", {
                staticClass: "desc mb-4",
                domProps: { innerHTML: _vm._s(_vm.event.details) }
              }),
              _c("div", { staticClass: "schedule mb-4" }, [
                _vm._m(0),
                _c("div", {
                  domProps: { textContent: _vm._s(_vm.event.schedule) }
                })
              ]),
              _c("div", { staticClass: "loc mb-4" }, [
                _vm._m(1),
                _c("div", {
                  domProps: { textContent: _vm._s(_vm.event.stage) }
                })
              ]),
              _vm._m(2)
            ]
          : [
              _c("span", { staticClass: "mx-auto py-3" }, [
                _vm._v("No event details added. Contact administrator.")
              ])
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("span", { staticClass: "fa fa-clock-o mr-2" }),
      _vm._v("Scheduled time")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("span", { staticClass: "fa fa-map-marker mr-2" }),
      _vm._v("Location")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cord mb-4" }, [
      _c("div", { staticClass: "title" }, [
        _c("span", { staticClass: "fa fa-users mr-2" }),
        _vm._v("Co-ordinators")
      ]),
      _c("ul")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d5e1057", module.exports)
  }
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card col-md-12" },
    [
      _c("div", { staticClass: "card-item" }, [
        _vm._m(0),
        _c(
          "div",
          { staticClass: "card-content limit-400" },
          _vm._l(_vm.events, function(event, index) {
            return _c("event-summary", {
              key: event.id,
              attrs: {
                event: event,
                selected: _vm.selectedEvent.id === event.id
              },
              on: {
                clicked: function($event) {
                  _vm.selectedIndex = index
                }
              }
            })
          }),
          1
        )
      ]),
      _c("event-details", { attrs: { event: _vm.selectedEvent } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("span", { staticClass: "fa fa-calendar-o mr-2" }),
      _vm._v("Upcoming events")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15a4fe52", module.exports)
  }
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "layout" }, [
    _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "central" }, [
        _vm._m(0),
        _c(
          "div",
          { staticClass: "auth" },
          [
            _vm.$store.getters.isLoggedIn
              ? [
                  _c("div", { staticClass: "icon mr-3" }),
                  _c("div", {
                    staticClass: "name",
                    domProps: {
                      textContent: _vm._s(_vm.$store.getters.userName)
                    }
                  })
                ]
              : _c("a", { attrs: { href: "/login" } }, [
                  _c("span", { staticClass: "fa fa-lock mr-2" }),
                  _c("span", [_vm._v("Login/Register")])
                ])
          ],
          2
        )
      ])
    ]),
    _vm.$store.getters.isLoggedIn
      ? _c("div", { staticClass: "nav" }, [_vm._m(1)])
      : _vm._e(),
    _c("div", { staticClass: "contents central" }, [_c("upcoming-events")], 1),
    _c("div", { staticClass: "footer" }, [
      _c("div", { staticClass: "central text-center py-2" }, [
        _c("span", { staticClass: "mx-auto" }, [
          _vm._v(
            "© " +
              _vm._s(_vm.$store.getters.thisYear) +
              " Tarang - All Rights Reserved"
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "logo", attrs: { href: "/dash" } }, [
      _c("img", { attrs: { src: "/images/logo.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "central" }, [
      _c("li", { staticClass: "item selected" }, [
        _c("a", { attrs: { href: "/dash/" } }, [
          _c("div", [
            _c("span", { staticClass: "fa fa-desktop mr-2" }),
            _vm._v("Dashboard")
          ])
        ])
      ]),
      _c("li", { staticClass: "item" }, [
        _c("a", { attrs: { href: "/dash/events" } }, [
          _c("div", [
            _c("span", { staticClass: "fa fa-calendar-o mr-2" }),
            _vm._v("Events")
          ])
        ])
      ]),
      _c("li", { staticClass: "item" }, [
        _c("a", { attrs: { href: "/dash/users" } }, [
          _c("div", [
            _c("span", { staticClass: "fa fa-users mr-2" }),
            _vm._v("Users")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73d837d2", module.exports)
  }
}

/***/ })

});