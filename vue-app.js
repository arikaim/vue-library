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
    var methods = {};
    var data = {};

    this.addMethod = function(name,definition) {
        methods[name] = definition;
    };

    this.addData = function(name,definition) {
        data[name] = definition;
    };

    this.getMethods = function() {
        return methods;
    }

    this.getData = function() {
        return data;
    }

    this.loadComponent = function(name) {

    };
}


var vueApp = new VueApp();
