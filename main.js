let Daily = document.getElementById('Daily');
let Weekly = document.getElementById('Weekly');
let Monthly = document.getElementById('Monthly');

let data;

const setActiveButton = (activeButton) => {  
    const buttons = [Daily, Weekly, Monthly];  
    
    buttons.forEach(button => {  
        if (button === activeButton) {  
            button.classList.add('active'); // Add active class to the clicked button  
        } else {  
            button.classList.remove('active'); // Remove active class from others  
        }  
    });  
};

Daily.addEventListener('click', () => {
    updateDisplay('daily');
    setActiveButton(Daily);
})

Weekly.addEventListener('click', () => {
    updateDisplay('weekly');
    setActiveButton(Weekly);
})

Monthly.addEventListener('click', () => {
    updateDisplay('monthly');
    setActiveButton(Monthly);
})

const updateDisplay = (timeframe) => {  
    data.forEach(item => {  
        const card = document.querySelector(`.card.${item.title}`);  
        if (card) {  
            const currentElement = card.querySelector('.current'); // Select the current element within the specific card  
            const previousElement = card.querySelector('.previous'); // Select the previous element within the specific card  

            // Update the text content based on the selected timeframe  
            currentElement.textContent = timeframe === 'daily' ? `${item.timeframes.daily.current}hrs` :  
                                          timeframe === 'weekly' ? `${item.timeframes.weekly.current}hrs` :  
                                          `${item.timeframes.monthly.current}hrs`;  

            // Update the previous element text with appropriate labels  
            previousElement.textContent = timeframe === 'daily' ? `Last Day - ${item.timeframes.daily.previous}hrs` :  
                                          timeframe === 'weekly' ? `Last Week - ${item.timeframes.weekly.previous}hrs` :  
                                          `Last Month - ${item.timeframes.monthly.previous}hrs`;
                                            
        }  
    });  
}

const initApp = () => {
    fetch('data.json')
    .then(res => res.json())
    .then(fetchedData => {
        data = fetchedData;
        updateDisplay('daily'); // Initialize with daily data
    });
}
initApp();



// --------------------------------------------------------------------------------------
// The ternary operator is a simplified conditional operator like if / else.
// Syntax: condition ? <expression if true> : <expression if false></expression>

// Regular If Statements

// Updating currentElement  
// if (timeframe === 'daily') {  
//     currentElement.textContent = `${item.timeframes.daily.current}hrs`;  
// } else if (timeframe === 'weekly') {  
//     currentElement.textContent = `${item.timeframes.weekly.current}hrs`;  
// } else { // Assuming the only other option is monthly  
//     currentElement.textContent = `${item.timeframes.monthly.current}hrs`;  
// }  

// // Updating previousElement  
// if (timeframe === 'daily') {  
//     previousElement.textContent = `Last Day - ${item.timeframes.daily.previous}hrs`;  
// } else if (timeframe === 'weekly') {  
//     previousElement.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;  
// } else { // Assuming the only other option is monthly  
//     previousElement.textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;  
// }