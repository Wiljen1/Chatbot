/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget','N/https','./lib/OpenAIClient','./lib/DataSource_FileCabinet'],
function(serverWidget, https, openai, fileSource) {

    function onRequest(context) {
        var request = context.request;
        var response = context.response;

        var form = serverWidget.createForm({ title: 'AI Chatbot' });

        var input = form.addField({
            id: 'custpage_question',
            type: serverWidget.FieldType.TEXTAREA,
            label: 'Ask a question'
        });

        if (request.method === 'POST') {
            var question = request.parameters.custpage_question;

            var docs = fileSource.getDocuments(question);
            var answer = openai.ask(question, docs);

            var output = form.addField({
                id: 'custpage_answer',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'Answer'
            });

            output.defaultValue = '<pre>' + answer + '</pre>';
        }

        form.addSubmitButton({ label: 'Ask' });
        response.writePage(form);
    }

    return { onRequest: onRequest };
});
