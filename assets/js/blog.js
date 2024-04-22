const postedSection = document.querySelector(".blogPage");
const blogBoard = JSON.parse(localStorage.getItem("blogPosts")) || [];


if (blogBoard.length === 0) {
    const emptyBoard = document.createElement("h2");
    emptyBoard.classList.add("noPosts");
    emptyBoard.innerHTML = "<h2>There are currently no posts right now.</h2>"
    console.log(emptyBoard);
    postedSection.append(emptyBoard);
} else {
    blogBoard.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post")

        postDiv.innerHTML = `
        <div>
            <h2 class="postTitle">${post.title}</h2>
            <p class="postContent">${post.content}</p>
        </div>
        <p style="margin-bottom: 5px solid black">Posted By: <span class="postUsername">${post.username}</span></p>
        `;

        postedSection.appendChild(postDiv);
    });
}