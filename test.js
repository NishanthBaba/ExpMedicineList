var tableBody = document.getElementById("table-body");
var inputForm = document.getElementById("input-form");
var exportBtn = document.getElementById("export-btn");
var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");

inputForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input values
  var nameInput = document.getElementById("name-input");
  var ageInput = document.getElementById("age-input");
  var distInput = document.getElementById("dist-input");
  var name = nameInput.value;
  var age = ageInput.value;
  var dist = distInput.value;
  // Create a new table row with the input values
  var newRow = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.textContent = name;
  var ageCell = document.createElement("td");
  ageCell.textContent = age;
  var distCell = document.createElement("td");
  distCell.textContent = dist;
  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(distCell);

  // Add the new row to the table
  tableBody.appendChild(newRow);

  // Clear the input fields
  nameInput.value = "";
  ageInput.value = "";
  distInput.value = "";
});

exportBtn.addEventListener("click", function() {
    // Get the table data
    var table = document.querySelector("table");
    var rows = Array.from(table.querySelectorAll("tr"));
    var headers = Array.from(rows.shift().querySelectorAll("th"));
  
    // Filter the visible rows that match the search term
    var visibleRows = [];
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (row.style.display !== "none") {
        visibleRows.push(row);
      }
    }
  
    var data = visibleRows.map(function(row) {
      return Array.from(row.querySelectorAll("td")).map(function(cell) {
        return cell.textContent;
      });
    });
  
    // Create the Excel file
    var csv = headers.map(function(header) {
      return header.textContent;
    }).join(",") + "\n" + data.map(function(row) {
      return row.join(",");
    }).join("\n");
    var csvData = new Blob([csv], {type: "text/csv;charset=utf-8;"});
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(csvData);
    link.setAttribute("download", "table.csv");
    link.click();
  });
  

  searchBtn.addEventListener("click", function() {
    // Get the search term entered by the user
    var searchTerm = searchInput.value;
  
    // Get the visible rows
    var rows = document.querySelectorAll("#table-body tr:not([style*='display: none'])");
  
    // Filter the visible rows that match the search term
    for (var i = 0; i < rows.length; i++) {
      var name = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
      var age = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
      var dist = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase();
      if (name.indexOf(searchTerm.toLowerCase()) > -1 ||
          age.indexOf(searchTerm.toLowerCase()) > -1 ||
          dist.indexOf(searchTerm.toLowerCase()) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  });
  
  function saveTableData() {
    var tableData = [];
    var rows = tableBody.querySelectorAll("tr");
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].querySelectorAll("td");
      var rowData = [];
      for (var j = 0; j < cells.length; j++) {
        rowData.push(cells[j].textContent);
      }
      tableData.push(rowData);
    }
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }
// Add the new row to the table
tableBody.appendChild(newRow);
newRow = document.createElement("tr");


// Save the table data in local storage
saveTableData();

// Clear the input fields
nameInput.value = "";
ageInput.value = "";
distInput.value = "";
function loadTableData() {
  var tableData = localStorage.getItem("tableData");
  if (tableData) {
    tableData = JSON.parse(tableData);
    for (var i = 0; i < tableData.length; i++) {
      var rowData = tableData[i];
      var newRow = document.createElement("tr");
      for (var j = 0; j < rowData.length; j++) {
        var newCell = document.createElement("td");
        newCell.textContent = rowData[j];
        newRow.appendChild(newCell);
      }
      tableBody.appendChild(newRow);
    }
  }
}
window.addEventListener("load", function() {
  loadTableData();
});
inputForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input values
  var nameInput = document.getElementById("name-input");
  var ageInput = document.getElementById("age-input");
  var distInput = document.getElementById("dist-input");
  var name = nameInput.value;
  var age = ageInput.value;
  var dist = distInput.value;

  // Create a new table row with the input values
  var newRow = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.textContent = name;
  var ageCell = document.createElement("td");
  ageCell.textContent = age;
  var distCell = document.createElement("td");
  distCell.textContent = dist;
  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(distCell);

  // Add the new row to the table
  tableBody.appendChild(newRow);

  // Save the table data in local storage
  saveTableData();

  // Clear the input fields
  nameInput.value = "";
  ageInput.value = "";
  distInput.value = "";
});
window.addEventListener("load", function() {
  loadTableData();
});
window.addEventListener("load", function() {
  loadTableData();
});
