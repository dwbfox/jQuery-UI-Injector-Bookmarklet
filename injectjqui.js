javascript: (function() {

    function debug(m) {
        if (typeof DEBUG_MODE !== 'undefined' && DEBUG_MODE === true) {
            console.log(m);
        }
    }

    if (typeof _jqinjected !== 'undefined' && _jqinjected === true)
        return;
    var jqui = document.createElement('script'),
        css = document.createElement('style'),
        jq = document.createElement('script'),
        body = document.querySelector('body'),
        jqv = '1.11.1',
        jquiv = '1.10.4';

    jqui.setAttribute('style', 'text/javascript');
    css.setAttribute('style', 'text/css');
    jq.src = '//ajax.googleapis.com/ajax/libs/jquery/' + jqv + '/jquery.min.js';
    jqui.src = '//ajax.googleapis.com/ajax/libs/jqueryui/' + jquiv + '/jquery-ui.min.js';
    css.setAttribute('href', '//ajax.googleapis.com/ajax/libs/jqueryui/' + jquiv + '/themes/smoothness/jquery-ui.css');

    body.appendChild(css);
    body.appendChild(jq);
    body.appendChild(jqui);
    console.log('jQuery + jQUery UI Injected');
    _jqinjected = true;
    return _jqinjected;
})();
