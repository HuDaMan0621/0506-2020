// UI Variables
const statsCity = document.querySelector('.stats-city');
const statsCountry = document.querySelector('.stats-country');
const statsScore = document.querySelector('.stats-score');
const statsAbout = document.querySelector('.about p');
const showcaseImage = document.querySelector('#showcase img');
const btnSubmit = document.querySelector('#btn-submit');
const userInput = document.querySelector('#search');
const submitForm = document.querySelector('#main-form');
let cardDiv = document.querySelector('.info-cards');

//handle user submit
function handleButtonClick(e){
    e.preventDefault();
    let searchInputValue = userInput.value; //assigned user input value to searchInputValue
    // cardInfo(cardInformation);
    // console.log(searchInputValue); 
    searchInputValue = searchInputValue.charAt(0).toUpperCase() + searchInputValue.slice(1);
    cardInfo(searchInputValue);//passing the input value ${searchInputValue} to the function cardInfo
    
    // const urlEncoded = encodedURIComponent(searchInputValue);  //urlEncoded will not work due to api search input New_York_City
    const endpoint = `https://www.triposo.com/api/20200405/location.json?id=${searchInputValue}&fields=all&account=3XPHWAVV&token=ubjfil8myjnlk6z1t6m3dehs96y9upct`;
    const searchPromise = fetch(endpoint);
    searchPromise
    .then(response => response.json())
    .then(data => {
        // console.log(searchInputValue); //testing to console log searchinputvalue
        let userSelectionJSON = JSON.stringify(data); 
        sessionStorage.setItem('userInformation', userSelectionJSON);//takes the fetched data and save in the session storage
        window.location.href = "info.html";
    
        })
        .catch(err => console.log(err));
}

// console.log(cardDiv);
function cardInfo (cardInformation){
    console.log(cardInformation);
    // console.log('information passing here')
    //top 3 interesting finds 
    const endpoint = `https://www.triposo.com/api/20200405/poi.json?location_id=${cardInformation}&tag_labels=eatingout&count=3&fields=id,name,score,price_tier&order_by=-eatingout_score&account=3XPHWAVV&token=ubjfil8myjnlk6z1t6m3dehs96y9upct`;
    const searchPromise = fetch(endpoint);
    searchPromise
        .then(response => response.json())
        .then(data => {
            let eatInfoJSON = JSON.stringify(data); 
            sessionStorage.setItem('eatInfo', eatInfoJSON);//takes the poi data and save in the session storage
            // console.log()
           
    
            // const title = ("Top Eats: ");
            cardDiv.innerHTML = createCards(eatInfo);
            
            // console.log()
            // window.location.href = "info.html";
            // console.log(data)
        })
        .catch(err => console.log(err));
}
// listens for user submit event,
btnSubmit.addEventListener('click', handleButtonClick)

test();

