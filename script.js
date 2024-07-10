$(document).ready(function() {
    $('nav a').on('click', function() {
        const page = $(this).attr('href').substring(1);
        loadPage(page);
        return false;
    });

    function loadPage(page) {
        $('#content').load(page + '.html');
    }

    loadPage('home'); // Load home page by default
});
