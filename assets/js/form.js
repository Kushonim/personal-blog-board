var btnEl = document.getElementById('submit');
var usernameEl = document.getElementById('username');
var titleEl = document.getElementById('title');
var contentEl = document.getElementById('content');


// A function that has the submit button capture the user input and then redirect you to the blog board
btnEl.addEventListener('click', function(event) {
    event.preventDefault();

    // console.log("Form Submitted..");
    console.log("Event: ", event.target);

    // we CAPTURE the USER input
    var username = usernameEl.value
    var title = titleEl.value
    var content = contentEl.value

    const blogPost = {
        "username": username,
        "title": title,
        "content": content
    }
 
    // convert the JS object into a JSON object
    localStorage.setItem('blog', JSON.stringify(blogPost))

    if (usernameEl.value === "") {
        alert("No username provided!");
    } else if (titleEl.value === "") {
        alert("No title provided!");
    } else if (contentEl.value === "") {
        alert("No content provided!");
    } else {
        const blogBoard = JSON.parse(localStorage.getItem("blogPosts")) || [];
        blogBoard.unshift(blogPost);
        localStorage.setItem("blogPosts", JSON.stringify(blogBoard));
        alert("Successfully posted!")
        // redirect to new HTML page
        window.location.replace('blog.html');
    }

    usernameEl.value = "";
    titleEl.value = "";
    contentEl.value = "";
})