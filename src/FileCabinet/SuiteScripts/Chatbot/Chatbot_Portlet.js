/**
 * @NApiVersion 2.x
 * @NScriptType Portlet
 */
define(['N/url'], function(url) {

    function render(params) {
        var suiteletUrl = url.resolveScript({
            scriptId: 'customscript_chatbot_suitelet',
            deploymentId: 'customdeploy_chatbot_suitelet'
        });

        params.portlet.title = 'AI Knowledge Assistant';

        params.portlet.html = '\n            <div>\n                <p>Ask questions based on internal documents.</p>\n                <a href="' + suiteletUrl + '" target="_blank">\n                    <button>Open Chat</button>\n                </a>\n            </div>\n        ';
    }

    return {
        render: render
    };
});
