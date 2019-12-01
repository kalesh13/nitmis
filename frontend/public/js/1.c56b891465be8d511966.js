webpackJsonp([1,2],{

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(220)
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
Component.options.__file = "resources/js/components/user/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6afeea8", Component.options)
  } else {
    hotAPI.reload("data-v-b6afeea8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(223)
/* template */
var __vue_template__ = __webpack_require__(224)
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
Component.options.__file = "resources/js/components/admin/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e291aee", Component.options)
  } else {
    hotAPI.reload("data-v-0e291aee", Component.options)
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_form__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__register_form__);
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
  name: "admin_register",
  props: {
    title: {
      type: String,
      default: "User Registration"
    },
    url: {
      type: String,
      default: "/register/"
    }
  },
  data: function data() {
    return {
      conduct: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere sollicitudin. Gravida neque convallis a cras semper auctor neque. Odio aenean sed adipiscing diam donec. Et malesuada fames ac turpis. Commodo ullamcorper a lacus vestibulum sed. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Elit at imperdiet dui accumsan sit amet nulla facilisi. Blandit libero volutpat sed cras ornare arcu dui. Lacus luctus accumsan tortor posuere ac ut consequat. Tortor consequat id porta nibh venenatis. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Ultrices gravida dictum fusce ut placerat. Proin nibh nisl condimentum id venenatis a condimentum vitae. Habitant morbi tristique senectus et netus. Pretium viverra suspendisse potenti nullam. Orci dapibus ultrices in iaculis nunc. Orci a scelerisque purus semper eget duis. Semper feugiat nibh sed pulvinar proin gravida. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget.</p><p>Orci nulla pellentesque dignissim enim sit amet. Porta lorem mollis aliquam ut porttitor. Lectus proin nibh nisl condimentum id venenatis a condimentum. Fermentum et sollicitudin ac orci phasellus egestas tellus. Felis imperdiet proin fermentum leo. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Vel pretium lectus quam id leo in vitae. Neque ornare aenean euismod elementum nisi. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Ante metus dictum at tempor commodo ullamcorper a. Tristique senectus et netus et malesuada fames ac turpis egestas. Semper eget duis at tellus. Sed viverra ipsum nunc aliquet bibendum enim. Eu volutpat odio facilisis mauris sit amet massa vitae. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Proin nibh nisl condimentum id venenatis. Placerat orci nulla pellentesque dignissim enim sit amet. Sagittis id consectetur purus ut faucibus pulvinar. Sit amet volutpat consequat mauris nunc.</p><p>Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lorem mollis aliquam ut porttitor leo. Maecenas volutpat blandit aliquam etiam erat velit. In metus vulputate eu scelerisque felis imperdiet. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Volutpat commodo sed egestas egestas fringilla phasellus. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Nisl suscipit adipiscing bibendum est. Pretium nibh ipsum consequat nisl vel. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Id cursus metus aliquam eleifend mi in. Felis donec et odio pellentesque diam volutpat. In iaculis nunc sed augue lacus viverra vitae congue. Gravida neque convallis a cras semper auctor neque vitae tempus. Massa tempor nec feugiat nisl pretium. Est placerat in egestas erat imperdiet sed euismod. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Dolor sit amet consectetur adipiscing elit.</p><p>Lacus luctus accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. A pellentesque sit amet porttitor. Dui sapien eget mi proin sed libero enim. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nec ultrices dui sapien eget mi proin. Id aliquet risus feugiat in ante metus dictum at tempor. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Ac ut consequat semper viverra nam libero. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Consectetur a erat nam at lectus urna duis. Dictum at tempor commodo ullamcorper a. Tempus urna et pharetra pharetra massa massa ultricies. Risus nullam eget felis eget nunc. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ultricies mi eget mauris pharetra et ultrices neque. Senectus et netus et malesuada fames ac turpis. Massa enim nec dui nunc mattis enim ut.</p><p>Lectus nulla at volutpat diam ut venenatis tellus in. Habitant morbi tristique senectus et netus et. Consequat id porta nibh venenatis cras sed felis. Etiam erat velit scelerisque in dictum non consectetur. Enim facilisis gravida neque convallis a cras. Vel orci porta non pulvinar. Bibendum est ultricies integer quis auctor. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ipsum a arcu cursus vitae. Lacus laoreet non curabitur gravida arcu. Sed id semper risus in hendrerit gravida rutrum quisque non.</p>"
    };
  },
  components: { RegisterForm: __WEBPACK_IMPORTED_MODULE_0__register_form___default.a }
});

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(215)
/* script */
var __vue_script__ = __webpack_require__(218)
/* template */
var __vue_template__ = __webpack_require__(219)
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
Component.options.__file = "resources/js/components/user/register_form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-daf575b2", Component.options)
  } else {
    hotAPI.reload("data-v-daf575b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 218:
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
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "register_form",
  props: ["url"],
  data: function data() {
    return {
      form_data: {
        name: "",
        age: "",
        campus: "",
        place: "",
        course: ""
      },
      dp: new __WEBPACK_IMPORTED_MODULE_0_z_vueplates__["DataPoster"]()
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.dp.formPost(this.url, this.form_data, this.onSuccess);
    },
    onSuccess: function onSuccess(data) {
      this.$store.commit("setToken", data);

      this.$router.push({ name: "dashboard" });
    }
  }
});

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
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
        _c("label", [_vm._v("Full name")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form_data.name,
              expression: "form_data.name"
            }
          ],
          staticClass: "form-control",
          attrs: { placeholder: "eg: Karthik Krishnan", required: "required" },
          domProps: { value: _vm.form_data.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form_data, "name", $event.target.value)
            }
          }
        })
      ]),
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
            placeholder: "eg: karthik@gmail.com",
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
            placeholder: "Write this down somewhere :)",
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
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Password confirmation")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form_data.password_confirmation,
              expression: "form_data.password_confirmation"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "password",
            placeholder: "Type the password again",
            required: "required"
          },
          domProps: { value: _vm.form_data.password_confirmation },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(
                _vm.form_data,
                "password_confirmation",
                $event.target.value
              )
            }
          }
        })
      ]),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Course")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form_data.course,
              expression: "form_data.course"
            }
          ],
          staticClass: "form-control",
          attrs: { placeholder: "eg: MBA(Marketing)", required: "required" },
          domProps: { value: _vm.form_data.course },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form_data, "course", $event.target.value)
            }
          }
        })
      ]),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("College")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form_data.college,
              expression: "form_data.college"
            }
          ],
          staticClass: "form-control",
          attrs: { placeholder: "eg: NIT, Calicut", required: "required" },
          domProps: { value: _vm.form_data.college },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form_data, "college", $event.target.value)
            }
          }
        })
      ]),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("Contact number")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form_data.phone,
              expression: "form_data.phone"
            }
          ],
          staticClass: "form-control",
          attrs: { placeholder: "Your mobile number", required: "required" },
          domProps: { value: _vm.form_data.phone },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form_data, "phone", $event.target.value)
            }
          }
        })
      ]),
      _vm._m(0),
      _c(
        "button",
        {
          staticClass: "btn theme-btn login-btn",
          attrs: { disabled: _vm.dp.submitted }
        },
        [
          _vm.dp.submitted
            ? _c("span", { staticClass: "fa fa-spin fa-circle-o-notch mr-2" })
            : _vm._e(),
          _c("span", [_vm._v("Register")])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group terms col-md-10" }, [
      _c("span", { staticClass: "small" }, [
        _vm._v(
          "By registering, you agree to all the Code of Conduct terms given aside."
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-daf575b2", module.exports)
  }
}

/***/ }),

/***/ 220:
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
      _c(
        "div",
        { staticClass: "card col-md-5 px-0 d-block" },
        [
          _c("div", {
            staticClass: "main-title",
            domProps: { textContent: _vm._s(_vm.title) }
          }),
          _c("register-form", { attrs: { url: _vm.url } })
        ],
        1
      ),
      _c("div", { staticClass: "card col-md-6 mx-auto px-0" }, [
        _c("div", { staticClass: "card-item" }, [
          _c("div", { staticClass: "title h1 mb-2 px-4" }, [
            _vm._v("Code of conduct")
          ]),
          _c("div", {
            staticClass: "card-content limit-400 px-4",
            staticStyle: { "max-height": "725px" },
            domProps: { innerHTML: _vm._s(_vm.conduct) }
          })
        ])
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
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b6afeea8", module.exports)
  }
}

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_register__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__user_register__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user_register",
  components: { RegisterLayout: __WEBPACK_IMPORTED_MODULE_0__user_register___default.a }
});

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("register-layout", {
    attrs: { title: "Admin Registration", url: "/admin/register/" }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e291aee", module.exports)
  }
}

/***/ })

});