define(['N/https'], function(https) {

    function ask(question, docs) {
        var prompt = "Answer ONLY from:\n" + docs.join("\n\n") + "\n\nQuestion:\n" + question;

        var response = https.post({
            url: 'https://api.openai.com/v1/responses',
            headers: {
                'Authorization': 'Bearer ' + runtime.getCurrentScript().getParameter({name: 'OPENAI_API_KEY'}),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-4.1',
                input: prompt
            })
        });

        return JSON.parse(response.body).output[0].content[0].text;
    }

    return { ask: ask };
});
