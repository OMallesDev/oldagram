let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main")
for (let i = 0; i < posts.length; i++){
   let post = posts[i]
    mainEl.innerHTML += `
        <div class="container">
            <div class="profile">
                <img class="profile-image" src="${post.avatar}" alt="${post.name}'s Avatar">
                <p><span class="profile-name">${post.name}</span><span class="location">${post.location}</span></p>
            </div>
            <img class="post-image" src="${post.post}" alt="A self portrait oil painting by ${post.name}">
            <div class="post-end">
                <img class="icon" src="images/icon-heart.png" alt="Like Icon">
                <img class="icon" src="images/icon-comment.png" alt="Comment Icon">
                <img class="icon" src="images/icon-dm.png" alt="Direct Message Icon">
                <p class="likes">${post.likes.toLocaleString()} likes</p>
                <p class="comment"><span class="profile-name">${post.username}</span> ${post.comment}</p>
            </div>`

}

