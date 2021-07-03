// import the date from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build table

function buildTable (data) {
    //clear existing data
    tbody.html("");
    // loop through array of data and add argument (dataRow) to represent 
    //each row of data as we iterate
    data.forEach((dataRow) => {
        // create variable to append a row to the HTML table body 
        let row = tbody.append("tr");

        //loop through each fiels in the dataRow argument
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table
            let cell = row.append("td");
            //specify that the variabble only holds the text of a value
            cell.text(val);
            
            }
        );
    });
};

function handleClick() {
    //select elements that matches #datetime
    //chain .propety("value"); to search for date values
    //grab the information & hold in the date variable 
    let date = d3.select("#datatime").property("value");
    //set default filter & save to a new variable
    let filteredData = tableData;
    //use if statement to create date filter
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    //rebuild the table using filtered data
    buildTable(filteredData);
}

//attach an event to listen for the form button 
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);