(function () {
    'use strict';

    angular
        .module('natureexclusiveApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
