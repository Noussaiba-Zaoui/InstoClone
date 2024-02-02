const posts = [
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


const section = document.getElementById("section-post");


for(let i = 0 ; i<posts.length ; i++){

    let currentPost = posts[i];

   section.innerHTML +=`

        <div class="flex-h">
        <img class="user-img profilPic" src="${currentPost.avatar}" alt="user">
        <div class="p-container">
            <p class="name">${currentPost.name}</p>
            <p class="location">${currentPost.location}</p>
        </div>
        </div>
        <img  class="img-post" src="${currentPost.post}" alt="post">
        <div class="like-section">
        <img class="icon-l like-el "src="images/icon-heart.png" alt="like">
        <img class="icon-l" src="images/icon-comment.png" alt="comment">
        <img class="icon-l" src="images/icon-dm.png" alt="share">
        </div>

        <p class="last-sec likes">${currentPost.likes} likes</p>
        <p class="last-sec comment"><span>${currentPost.username}</span> ${currentPost.comment}</p>
   `
}


// Get all elements with the class "like-el" after they have been added to the DOM
const likeElements = document.querySelectorAll('.like-el');

// Attach a click event listener to each like element
likeElements.forEach((likeElement, index) => {
    likeElement.addEventListener('click', function() {
        // Increase the likes for the corresponding post
        posts[index].likes += 1;

        // Update the HTML to reflect the new likes count
        const likesElement = document.querySelectorAll('.likes')[index];

        likesElement.textContent = `${posts[index].likes} likes`;

    });
});



const postsElements = document.querySelectorAll('.img-post');


postsElements.forEach((postElement, index) => {
    postElement.addEventListener('dblclick', function() {
       
       
        posts[index].likes += 1;

       
        const likesElement = document.querySelectorAll('.likes')[index];

        likesElement.textContent = `${posts[index].likes} likes`;


       

    });
});