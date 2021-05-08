// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // this will detect all elements that changed and will store the id and value in an array
    let changedElement = d3.select(this)

    // obtain the value and Id from the changedElement array

    // 4b. Save the value that was changed as a variable.
    // this will store the user's input as the elementValue 
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    // this will store the Id of what the user changed/inputed as filterId
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    // Since we can have multiple values/filtered entered, if a value is entered, add that to our filters list
    if (elementValue){
      filters[filterId] = elementValue;
    }
    // otherwise, if no value is entered, then we don't want that Id to be included in our filter 
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    // this loads in the tableData by default/initially 
    var filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that matches the filter values
    // use Object.Entries to obtain the key/value pair from the filters array we created in 1.
    // using forEach loop through each key/value in the array and apply a function
    // the function will set the filteredData = to the data filtered where the row matches the user input
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  // detects which input elements have changed on the html page and calls the updateFilters function
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
