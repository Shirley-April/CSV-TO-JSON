const fs = require("fs");

const data = fs.readFileSync("data.csv", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

const table = data.split(/\r?\n/);
const columns = table[0].split(",");
const rows = table.slice(1).map((item) => item.split(","));

var result = rows.map(function (row) {
  return row.reduce(function (result, field, index) {
    result[columns[index]] = field;
    return result;
  }, {});
});

console.log(JSON.stringify(result));
