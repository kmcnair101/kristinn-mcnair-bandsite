const apiKey = "d5f5c387-62f7-48ea-abf2-eec461dc3393";


//Grabbing the form element and post sections
const form = document.querySelector('.conversation__form');
const posts = document.querySelector('.posts')

let comments = [];




//Takes comment and creates article with elements inside using innerHTML and template literals
const displayComment = comment => {
    const post = document.createElement('article');
    post.classList.add("post");
    //Use the new Date on comment date to change the presented format
    const newDate = new Date(comment.timestamp);
    const commentDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;

    post.innerHTML = `
        <div src="#" class="post__image"></div>
        <div class="post__content">
            <div class="post__header">
                <h3 class="post__name">${comment.name}</h3>
                <p class="post__date">${commentDate}</p>
            </div>
            <p class="post__comment">${comment.comment}</p>
        </div>`;
    //Appends newly created post to the section.post element
    posts.appendChild(post);
}

//Updates sections and loops through array of objects
const render = () => {
    posts.innerHTML = ""
    for (const comment of comments) {
        displayComment(comment);
    }
}

axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
    .then(response => {
        console.log(response);
        comments = response.data;
        render();
})
    .catch( error => {
    console.log(error);
})

//Function to run when form is submitted
const formFunction = event => {
    //prevents default action
    event.preventDefault();
    //Getting the elements
    const data = {
        name: event.target.name.value,
        comment: event.target.comment.value
    };
    //creating an object
    const postObject = {
        name: data.value,
        timestamp: Date.now(), 
        comment: data.comment
    };
    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, data)
        .then(response => {
            console.log(response);
            comments.unshift(response.data);
            render();
        })
        .catch(error => {
            console.log(error);
        })
    //resetting the value
    event.target.reset();
}
//Event listener for form submission
form.addEventListener('submit', formFunction)

//Inital render to have inital comments appear
render();