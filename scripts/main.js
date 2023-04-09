const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/guitarUdenBaggrund.png") {
        myImage.setAttribute("src", "images/elguitar2.png");
    } else {
        myImage.setAttribute("src", "images/guitarUdenBaggrund.png");
    }
};

myButton = document.querySelector("button");
myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What is your name?");
    if (!myName) {
        setUserName();
    } 
    localStorage.setItem("name", myName);
    myHeading.textContent = `Guitar is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Guitar is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}

