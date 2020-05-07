const userInformation = sessionStorage.getItem('userInformation');
const travelInfo = JSON.parse(userInformation);

// console.log(eatInfo);


function locationStatus(travelInfo) {
    const data = travelInfo.results[0];
    statsCity.innerHTML = data.id
    statsCountry.innerHTML = data.country_id;
    statsScore.innerHTML = data.score.toFixed(1);
    statsAbout.innerHTML = data.intro;
    showcaseImage.setAttribute('src', data.images[0].source_url)

};
locationStatus(travelInfo);



function createCards(eatInfo) {
    // console.log(dataTry.results[0].name)
    // const cardTitle = dataTry.results;
    // console.log(cardTitle);  
    // console.log(eatInfo);

    console.log(eatInfo.results);
    const renderCards = eatInfo.results.map(card => {
        return 
        `
        <div class="card">
            <h3>${title}</h3>
            <div class="card-info">
                <ul class="info-1">
                    <li>Name: <span class="name-span1">${card.results[0].name}</span></li>
                    <li>Price Tier: <span class="price-span1">2</span></li>
                    <li>Score: <span class="score-span1">3.2</span></li>
                </ul>
                <ul class="info-2">
                    <li>Name: <span class="name-span2">Site 1</span></li>
                    <li>Price Tier: <span class="tier-span2">2</span></li>
                    <li>Score: <span class="score-span2">3.2</span></li>
                </ul>
                <ul class="info-3">
                    <li>Name: <span class='name-span3'>Site 1</span></li>
                    <li>Price Tier: <span class='price-span3'>2</span></li>
                    <li>Score: <span class='score-span3'>3.2</span></li>
                </ul>
            </div>
        </div>
        `
    })
    return renderCards.join('');
}








