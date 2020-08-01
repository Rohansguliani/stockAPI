
var api = 'https://www.alphavantage.co/query?';
var func = 'function=TIME_SERIES_DAILY_ADJUSTED';
var output = '&outputsize=full'
var key = '&apikey=41HMCPW997WPQTQW'
var stock;

var currentDate = "2020-07-31";

var price;

function queryStock() {
    var stock = document.getElementById('stock');
    var symb = '&symbol=' + stock.value;
    var url = api + func + symb + output + key;
    console.log(url);
    $.getJSON(url, function(data) {
        var dates = data["Time Series (Daily)"];
        price = dates[currentDate]["2. high"];
        document.getElementById("insert").innerHTML = stock.value + " price is " + price;
    });
}