require.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min'
    }
});
require(['jquery'], function ($) {
    window.jQuery = $;
    require(['bootstrap'], function () {
        return;
    });
});
