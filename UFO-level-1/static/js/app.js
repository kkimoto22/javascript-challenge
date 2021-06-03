// from data.js
var tableData = data;
console.log(tableData);

// reference table body
var tbody = d3.select("tbody");


tableData.forEach(function(ufo) {
    console.log(ufo);    
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cells = row.append('td');
        cells.text(value);
    });
});

// build table
// buildTable(tableData);

// // create click handler
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("")
    // Select the input element and get the raw HTML node-help from activity 14.3.9
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData)


    filteredData.map(selections => {

        var row = tbody.append("tr")
    
        Object.entries(selections).map(([key, value]) => {
            console.log(key, value);
            var cells = row.append('td');
            cells.text(value);
            
        });
    });
});



// function clickButton() {
//     var date = d3.select("#datetime").property('value');
//     // add to table with filtered data
//     var newTable = tableData;
//     newTable = newTable.filter(ufoSighting => ufoSighting.datetime === date);
//     // rebuild table
//     buildTable(newTable);
// }

// button.on("click", clickButton);