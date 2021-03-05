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

tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value)
    });
});

tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
    });
});


tableData.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});
