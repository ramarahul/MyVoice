$(document).ready(()=>{
    //Ajax Call
    $.get("/api/posts", (results) => {
        outputPosts(results, $(".postsContainer"));
    })
})

function outputPosts(results, container){
    container.html("");

    results.forEach((result)=>{
        var html = createPostHtml(result);
        container.append(html);
    })

    if(results.length === 0){
        container.append("<span class='noResults'>Nothing to show here. Please follow someone or post something to get some results</span>")
    }
}