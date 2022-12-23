let count = 0;

let incrementFunc = () => {
    if (count < 20) {
        count++;
    }
    updateCounter();
}

let decrementFunc = () => {
    if (count > -20) {
        count--;
    }
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
