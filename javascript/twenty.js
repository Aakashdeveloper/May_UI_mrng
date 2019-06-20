const GITHUB = "https://api.github.com/search/repositories";

function getDataFromApi(searchTerm, response){
    const config = {
        url: GITHUB,
        type: 'GET',
        dataType:'json',
        data:{
            q: `${searchTerm}`
        },
        success:response
    };

    $.ajax(config)
}

