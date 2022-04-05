function price() {
    // let url2 = "https://api1.binance.com/api/v3/ticker/price?symbol=ETHUSDC";
    // url2.toUpperCase
    let url = mountUrl();
    console.log(url);
    let result = document.getElementById("result");
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data),
            result.innerHTML = data.price
        });

}

function mountUrl() {
    let baseCoin = document.getElementById("base-coin").value.toUpperCase();
    let endCoin = document.getElementById("end-coin").value.toUpperCase();

    let url = `https://api1.binance.com/api/v3/ticker/price?symbol=${baseCoin}${endCoin}`;
    return url;
}
