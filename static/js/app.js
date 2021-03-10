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


// Assign data to variable
//  var tableData = data;

// Select button 
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function() {

    tbody.html("");

    // Prevent page refreshing 
    d3.event.preventDefault();

    // Select the input datetime element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    //  Get the value property of the input element 
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

});






