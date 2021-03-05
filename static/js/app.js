// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    console.log(ufoData)
});

tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var rows = tbody.append("tr")

});

