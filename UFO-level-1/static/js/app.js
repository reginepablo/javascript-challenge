// from data.js
var tableData = data;

// append table 
tableData.forEach(appendTable);

// Select the filter button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

// Remove existing table
   d3.select("tbody").html("");

 // Prevent the page from refreshing
   d3.event.preventDefault();

// Get the input value
    var dateTime = d3.select("#datetime").property("value");
     console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === dateTime);
     console.log(filteredData)

//  Display the filtered data
    filteredData.forEach(appendTable);

});

// Define a function to append table upoon the reported data
function appendTable(report) {
    var tbody = d3.select("tbody");

    var row = tbody.append("tr");


    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);


        if (key === "comments") {
            cell.attr("class", "record-comments")
        }
    });
}
