// Element Get Function
function idElement(id) {
    const element = document.getElementById(id);
    return element;
}


// card section id
const cardSection = idElement('card-section');

// Function to increase the number when clicking on the heart icon
cardSection.addEventListener('click', function (event) {
    if (event.target.className.includes('heart-icon')) {
        // navbar heart count id
        const heartCount = idElement('heart-count').innerText;
        const heartCountIncrease = Number(heartCount) + 1;
        idElement('heart-count').innerText = heartCountIncrease;
    }
})


