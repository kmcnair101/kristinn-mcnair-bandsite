//Grabbing the form element and post sections
const form = document.querySelector('.conversation__form');
const posts = document.querySelector('.posts')

//Initial comments
const comments = [
    {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
}, 
    {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
}, 
    {
    name: "Connor Walton", 
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }
] 



//Takes comment and creates article with elements inside using innerHTML and template literals
const displayComment = (comment) => {
    let post = document.createElement('article');
    post.className = "post";
    post.innerHTML = `
        <div src="#" class="post__image"></div>
        <div class="post__content">
            <div class="post__header">
                <h3 class="post__name">${comment.name}</h3>
                <p class="post__date">${comment.date}</p>
            </div>
            <p class="post__comment">${comment.comment}</p>
        </div>`;
    posts.appendChild(post);
}

//Updates sections
const render = () => {
    posts.innerHTML = ""
    for (const comment of comments) {
        displayComment(comment);
    }
}
//Function to run when form is submitted
const formFunction = (event) => {
    //prevents default action
    event.preventDefault();
    //Getting the value from the input
    const nameInput = document.querySelector('#name');
    const commentInput = document.querySelector("#comment")
    //creating an object
    const postObject = {
        name: nameInput.value,
        date: new Date(),
        comment: commentInput.value
    };
    //pushing the object into the array of objects
    comments.push(postObject);

    //resetting the value
    nameInput.value = "";
    commentInput.value = "";
    render();

}
//Event listener for form submission
form.addEventListener('submit', formFunction)

render();