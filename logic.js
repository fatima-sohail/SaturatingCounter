let count = 0;

let incrementFunc = () => {
    count++;
    updateCounter();
}

let decrementFunc = () => {
    count--;
    updateCounter();
}

let resetFunc = () => {
    count = 0;
    updateCounter();
}

let updateCounter = () => {
    var htmlElem = document.getElementById("counter")
    htmlElem.innerText = count;

}
