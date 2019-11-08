const logo = document.querySelector('.logo');
const images = document.querySelectorAll('.bkcolor-3, .grey, .bkcolor-6, .bkcolor-8, .logo-white');

function isInsideInImages(images, logoPos) {
    for (var i = 0; i < images.length; i++) {
        let imagePos = images[i].getBoundingClientRect();
        let logoBottomEdge = (logoPos.top + logoPos.height) - (logoPos.height / 5);

        if (logoBottomEdge > imagePos.top
          && logoBottomEdge <= (imagePos.top + imagePos.height)) {
            return true;
        }
    };
    return false;
}

window.addEventListener('scroll', function () {

    const a = logo.getBoundingClientRect();

    if (isInsideInImages(images, a)) {
        logo.style.color = 'white';
    } else {
        logo.style.color = 'black';
    }

});
