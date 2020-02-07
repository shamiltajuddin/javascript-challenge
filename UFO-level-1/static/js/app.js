{/* <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery/jquery-1.6.2.min.js"></script>;
import $ from 'jquery'; */}


// from data.js
var tableData = data;
// Console log the UFO data from data.js
console.log(tableData);


// Get a reference to the table body
var tbody = d3.select("tbody");


// Loop through data and console.log each UFO sighting
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Use d3 to append 1 cell per UFO sighting value (date, city, state, country, shape, duration, comments)
    var row = tbody.append("tr");
});


// Use d3 to append one table row 'tr' for each UFO sighting object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Use d3 to append 1 cell per UFO sighting value (date, city, state, country, shape, duration, comments)
    var row = tbody.append("tr");


// Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the UFO sighting object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    // Select the input datetime get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach(function(selections) {

    console.log(selections);

    // Append `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value in the UFO sighting object
        var cell = row.append("td");
        cell.text(value);
    });
});
});