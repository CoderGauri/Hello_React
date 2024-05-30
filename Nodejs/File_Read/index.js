// Import the xlsx module
const xlsx = require('xlsx');

// Load the Excel file
const workbook = xlsx.readFile('employee_details.xlsx');
// Get the first sheet name
const sheetName = workbook.SheetNames[0];

// Get the worksheet
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to JSON format
const data = xlsx.utils.sheet_to_json(worksheet);

// Print the data
console.log(data);

