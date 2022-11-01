$(function() {

    //console.log ( "The 'jquery.comments.js' is loaded" );

    $(function() {

        $.fn.jQComments = function (options) {
            let defaults = {
                data: []
            };
            let opts = $.extend(defaults, options);
            let container = this;
            let output = "";

            for( let index = 0; index < opts.data.length; index++){
                output = output + opts.data[index].name + " - " +  opts.data[index].message
            }

            //console.log( output );

            container.text(output);

            //console.log("jQComments Function is Initialized");

            return container;
        };
    });

});