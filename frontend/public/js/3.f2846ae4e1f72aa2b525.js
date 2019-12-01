webpackJsonp([3],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(221)
/* template */
var __vue_template__ = __webpack_require__(222)
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
Component.options.__file = "resources/js/components/login/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ecc2ca70", Component.options)
  } else {
    hotAPI.reload("data-v-ecc2ca70", Component.options)
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

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_z_vueplates__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_z_vueplates___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_z_vueplates__);
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
  name: "login",
  data: function data() {
    return {
      form_data: {
        email: "",
        password: ""
      },
      dp: new __WEBPACK_IMPORTED_MODULE_0_z_vueplates__["DataPoster"]()
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.dp.formPost("/api/login", this.form_data, this.onSuccess, this.onError);
    },
    onSuccess: function onSuccess(data) {
      this.$store.commit("setToken", data);

      this.$router.push({ name: "dashboard" });
    },
    onError: function onError(error) {}
  }
});

/***/ }),

/***/ 222:
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
    _c("div", { staticClass: "contents central" }, [
      _c("div", { staticClass: "card col-md-5 mx-auto px-0 d-block" }, [
        _c("div", { staticClass: "main-title" }, [_vm._v("User Login")]),
        _c(
          "form",
          {
            staticClass: "register-form px-3 pb-4",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Email address")]),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form_data.email,
                    expression: "form_data.email"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "email",
                  placeholder: "Registered email address",
                  required: "required"
                },
                domProps: { value: _vm.form_data.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form_data, "email", $event.target.value)
                  }
                }
              })
            ]),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Password")]),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form_data.password,
                    expression: "form_data.password"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "password",
                  placeholder: "Account password",
                  required: "required"
                },
                domProps: { value: _vm.form_data.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form_data, "password", $event.target.value)
                  }
                }
              })
            ]),
            _c(
              "button",
              {
                staticClass: "btn theme-btn login-btn",
                attrs: { disabled: _vm.dp.submitted }
              },
              [
                _vm.dp.submitted
                  ? _c("span", {
                      staticClass: "fa fa-spin fa-circle-o-notch mr-2"
                    })
                  : _vm._e(),
                _c("span", [_vm._v("Login")])
              ]
            ),
            _vm._m(2)
          ]
        )
      ])
    ]),
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group terms col-md-10 small mt-4" }, [
      _c("span", [_vm._v("Don't have an account? ")]),
      _c("a", { attrs: { href: "/register" } }, [_vm._v("Register now")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ecc2ca70", module.exports)
  }
}

/***/ })

});