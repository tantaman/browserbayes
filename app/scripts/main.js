require.config({
    paths: {
        // jquery: '../bower_components/jquery/jquery',
        lodash: '../bower_components/lodash/dist/lodash',
        d3: '../bower_components/d3/d3',
        bacon: '../bower_components/bacon/dist/Bacon',
        lls: '../bower_components/lls/dist/LargeLocalStorage',
        Q: '../bower_components/q/q'
    },

    shim: {
            d3: {
                    exports: 'd3'
            }
    }
});

require([], function () {
    'use strict';
    console.log('yo');
});

