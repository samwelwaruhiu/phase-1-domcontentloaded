// Your code goes here

document.addEventListener('DOMContentLoaded', () => {
    const o = document.getElementById(`text`)
    o.innerHTML = ``;
    o.appendChild(document.createTextNode("This is really cool!"))
    // set innerHTML to an empty string.

    //Then we call document.createTextNode to create a new text node with the text in the argument.

    //And then we call appendChild to insert the text node to the div.
})