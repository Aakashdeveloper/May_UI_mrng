const GITHUB = "https://api.github.com/search/repositories";

function getDataFromApi(userquery, response){
    console.log(">>>>inside>>getDataFromApi")
    const config = {
        url: GITHUB,
        type: 'GET',
        dataType:'json',
        data:{
            q: `${userquery}`
        },
        success:response
    };

    $.ajax(config)
}

function displayGitHubSearchData(data){
    console.log(">>>>inside>>displayGitHubSearchData")
    let result = data.items[0];
    result=`
    <img src='${result.owner.avatar_url}'/>
    <h2>${result.owner.login}</h2>
    <h3>StarCount:<span class="glyphicon glyphicon-star"></span>${result.stargazers_count}</h3>
    <span>Watchers:${result.watchers}</span>

    `;

    $('.js-search-results').html(result);
    
}

function passUserQuery(){
    console.log(">>>>inside>>passUserQuery")
    $('.js-search-from').submit(event => {
        const querytraget = $(event.currentTarget).find('.js-query');
        const query = querytraget.val();
        querytraget.val("");
        getDataFromApi(query, displayGitHubSearchData)
    })
}


$(passUserQuery());