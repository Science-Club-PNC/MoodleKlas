$("#nav > li > a[data-target]").parent('li').hover(
        function() { 
            target = $(this).children('a[data-target]').data('target');
            $(target).collapse('show') 
        },
        function() { 
            target = $(this).children('a[data-target]').data('target'); 
            $(target).collapse('hide');
        }
);