/**
 * Created by Мишаня on 04.03.2015.
 */

 /**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'angular-ui-router',
    'angular-gettext',
    'lodash',
    'mainApp-include'
], function (require, ng) {
    'use strict';
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['mainApp']);
    });
});