import './main.scss';
function bio() {
    const element = document.createElement("div");
    element.innerHTML = "my website";
    element.classList.add('myDiv')
    return element;
};document.body.appendChild(bio());