function remove() {
    console.log('This work!');
    let blueElements = document.getElementsByClassName('blue');
    let firstLi = blueElements[0];
    console.log(firstLi.parentNode.removeChild(firstLi))
}