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

//Grabbing the form element and post sections
const form = document.querySelector('.conversation__form');
const post = document.querySelector('.posts')

//Function to run when form is submitted
const formFunction = (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    const commentInput = document.querySelector("#comment")

    const postObject = {
        name: nameInput.value,
        date: new Date(),
        comment: commentInput.value
    };

    comments.push(postObject);
}

form.addEventListener('submit', )