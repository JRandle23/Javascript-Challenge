// from data.js
var tableData = data;
console.log(tableData);

// Reference the table body
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach(function(ufoData) {
    console.log(ufoData);
    // Append table row for each line of data 
    var rows = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = rows.append("td");
        cell.text(value);
    });
});


