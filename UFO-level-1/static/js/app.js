// from data.js
var tableData = data;
console.log(tableData);

// Reference the table body
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach((ufoData) => {
    console.log(ufoData);
    // Append table row for each line of data 
    var rows = tbody.append("tr");

    Object.entries(ufoData).forEach(([key, value]) => {
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

var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// function filteredTable(data) {
//     tbody.html("");
//     data.forEach((item) => {
//         var newRow = tbody.append('tr');
//         Object.values(item).forEach((val) => {
//             newRow.append("td").text(val)
//         });
//     });
// };

function runEnter() {

    // Prevent page refreshing 
    d3.event.preventDefault();

    // Select the input datetime element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    //  Get the value property of the input element 
    var inputValue = inputElement.property("value");

    // console.log(inputValue);

    // tbody.html("");

        var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);

        tbody.html("");

        if (filteredData.length === 0) {
        tbody.text("No UFO sightings recorded.  Try again!");
        }

        else {
            filteredData.forEach((ufoData) => {
                var row = tbody.append("tr");
                Object.entries(ufoData).forEach(([key,value]) => {
                    var cell = row.append("td");
                    cell.text(value);
            });
        });
    };
    // // console.log(filteredData);
    // filteredData.forEach((ufoData) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoData).forEach(([key,value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
    // console.log(filteredData);
    // filteredTable(filteredData);

};






