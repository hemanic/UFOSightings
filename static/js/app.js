// from data.js
var tableData = data;

// YOUR CODE HERE!

//ref to table
var tbody = d3.select("tbody");

console.log(data);

//render table
function renderTable(){
    //loop through data and "print" each object
    data.forEach(function(UFOreport){
       console.log(UFOreport); 
       //append table row
    var row= tbody.append("tr")
    Object.entries(UFOreport).forEach(function([key,value]) {
        console.log(key, value);
        var cell= row.append("td");
        cell.text(value);
    })
    })

};
renderTable();

var submit = d3.select("#filter-btn");

submit.on("click", function(){

 // stop the page from refreshing
 d3.event.preventDefault();

 //input
    var inputElement = d3.select("#datetime").property("value");
    console.log(inputElement)
 // Return Value
   var filteredData = tableData.filter(d => d.datetime === inputElement);
    console.log(filteredData);

   tbody.html("");

   filteredData.forEach(function(entry){
       var row = tbody.append("tr")
       Object.entries(entry).forEach(function([key,value]){
           row.append("td").text(value);
})
})

//renderTable();
});
