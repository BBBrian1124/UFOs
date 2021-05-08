// import the data from data.js
// we will declare it as a const because we won't be changing it 
const tableData = data;

// Reference the HTML table using d3
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
    // helps to create dashboards, or a collection of visual data (such as graphs and maps)
// declare variable 'tbody' and use 'd3.select' to look for <tbody> tag from the html file
var tbody = d3.select("tbody");

// we will create a function 'buildTable' to create a table of the 'data.js' file
function buildTable(data) {
    // first we want to clear table (i.e. remove filters) each time the function is called 
    // tbody.html references the table from the html file, then ("") is a blank string 
    tbody.html("");

    //forEach function takes a function and applies it to each item in the loop
    //we are passing 'data' (our data.js file) as the item to loop through
    data.forEach((dataRow) => {
        // in our loop, we will append the item of the loop into the <tbody> html tag and add a table row (tr)
        let row = tbody.append("tr");
        // Object.values tells JavaScript to reference one object from the array of ufo sightings in data
        // datarow means we want those objects to go into datarow 
        // forEach((val) specifies that we want one object per row 
        Object.values(dataRow).forEach((val) => {
            // then append the object into the table using the table data <td> tag
            let cell = row.append("td");
            // extract just the text from the object, so that it is stored in the table as text 
            cell.text(val);
            // this is essentially looping through each value in the table row from our data file
                // then storing/appending it to the table
        });
    });
  }

function handleClick() {
    // Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality
        //it "listens" for events such as a button click the reacts by executing our code
        //.select() selects the first item matching the selector string (#datetime)
        //.propert("value") is chained so that it takes the matching item and places it in our 'date' variable 
    let date = d3.select("#datetime").property("value");
    
    // We will set the 'default filter' as the original table then use our code to allow user filtering 
    let filteredData = tableData;

    // Using a if statement, we will replace/filter the able using .filter
    // within that we are choose to take rows where the datetime is equal === the date selected/specified
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // now that we have create the code for our filter, we can call the function to build the filtered table
    buildTable(filteredData);
}

// In order to read when the filter button is clicked we use d3 to select the button we will create in html
// .on tells the code which function to run when the button (filter-btn) is 'clicked'
d3.selectAll("#filter-btn").on("click", handleClick);

// build a table with the original data so that this loads when the page is first opened 
buildTable(tableData);