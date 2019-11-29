import moment from 'moment-timezone';

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
    window.$ = window.jQuery = require('jquery');
    window.moment = moment;

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

let token = document.body.querySelector('input[name="csrfmiddlewaretoken"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRFToken'] = token.getAttribute('value');
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';