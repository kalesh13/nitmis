import Helper from "z-vueplates";

const helper = {
    install: function (Vue, options) {
        Object.defineProperty(Vue.prototype, '$helper', {
            get() {
                return new Helper();
            }
        });
    }
}

export default helper;