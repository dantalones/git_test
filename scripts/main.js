let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpeg') {
        myImage.setAttribute('src', 'images/van-halen.jpg');
    } else {
        myImage.setAttribute('src', 'images/image.jpeg');
    }
}
