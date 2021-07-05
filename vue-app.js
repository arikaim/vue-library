/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
*/
'use strict';

/**
 * Vue app Helper class
 */
function VueApp() {
    var self = this;
    var methods = {};
    var data = {};

    this.vue = null;

    this.init = function(id) {
        id = getDefaultValue(id,'#app');

        this.vue = new Vue({
            el: id,
            data: function() {
                return self.getData()
            },
            methods: self.getMethods()
        });
    
        console.log('Vue app mounted in ' + id);
    };

    this.addMethod = function(name, definition) {
        methods[name] = definition;
    };

    this.addData = function(name, definition) {
        data[name] = definition;
    };

    this.getMethods = function() {
        return methods;
    }

    this.getData = function() {
        return data;
    }
}

var vueApp = new VueApp();

$(window).on('load',function() {
    vueApp.init();
});