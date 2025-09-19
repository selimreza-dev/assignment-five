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

// Call button id
cardSection.addEventListener('click', function (event) {
    if (event.target.className.includes('call-btn')) {
        // Current Coin
        const currentCoin = idElement('current-coin').innerText;
        // call button
        const callBtn = event.target;
        // Service Name
        const serviceName = callBtn.parentNode.parentNode.parentNode.children[1].children[1].innerText;
        // Service Number
        const serviceNumber = callBtn.parentNode.parentNode.parentNode.children[2].children[0].innerText;

        // current time
        const currentTime = new Date();
        const localTime = currentTime.toLocaleTimeString();



        if (Number(currentCoin) >= 20) {
            // decrease coin
            const coinReduce = Number(currentCoin) - 20;
            idElement('current-coin').innerText = coinReduce;
            // calling alert
            alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

            // Create Element
            const callHistoryItem = document.createElement('div');
            callHistoryItem.innerHTML = `
                        <div class="bg-[#f7f7f7] rounded-[8px] px-4 py-2 flex items-center justify-between">
                            <div>
                                <!-- item title -->
                                <h4 class="text-[14px] font-semibold font-shurjo mb-1">${serviceName}</h4>
                                <!-- item number -->
                                <span class="text-[14px] font-semibold text-gray-500">${serviceNumber}</span>
                            </div>
                            <div>
                                <!-- history time -->
                                <span class="text-[14px]">${localTime}</span>
                            </div>
                        </div>
            `;
            const callHistory = idElement('call-history');
            callHistory.append(callHistoryItem);


        } else {
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে !!!')
        }
    }
})

// History Clear function
const historyClearBtn = idElement('history-clear-btn');
historyClearBtn.addEventListener('click', function () {
    const totalHistory = idElement('call-history');
    totalHistory.innerHTML = '';
})


