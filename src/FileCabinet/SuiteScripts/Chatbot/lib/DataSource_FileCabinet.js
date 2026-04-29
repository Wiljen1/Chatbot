define(['N/file','N/search'], function(file, search) {

    function getDocuments(query) {
        var results = [];

        var fileSearch = search.create({
            type: 'file',
            filters: [['name','contains',query]],
            columns: ['internalid']
        });

        fileSearch.run().each(function(result) {
            var f = file.load({ id: result.getValue('internalid') });
            var content = f.getContents();
            results.push(content.substring(0, 500));
            return true;
        });

        return results;
    }

    return { getDocuments: getDocuments };
});
