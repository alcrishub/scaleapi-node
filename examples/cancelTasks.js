const scaleapi = require('../lib/scaleapi.js'); // Change to just "scaleapi" for your project
const fs = require('fs');

// HOW IT WORKS:
// Given a .csv file or array of task ids you'd like cancelled,
// go through and cancel Tasks for each row.

// INPUT PARAMETERS:
const API_KEY = 'live_xxxxx';
const DO_DRY_RUN = true;
const fileName = 'list/of/task/ids_to_cancel.csv'

const client = scaleapi.ScaleClient(API_KEY);

(async function () {
  // ====================
  // === READ IN ROWS ===
  // ====================

  // Read in Task Details from CSV
  let rows = getIdsFromCsv(fileName);

  // Alternatively, create just an array of rows to cancel Tasks from
  // let rows = [
  //   '5d4121900591c138750xxxxx'
  // ]

  // ====================
  // === PROCESS ROWS ===
  // ====================

  // Process each row as needed
  rows = rows.map(
    row => row.split(',')[0].trim()
  );

  console.log(`Number of Rows Found: ${rows.length}`);

  // ====================
  // === CANCEL TASKS ===
  // ====================

  if (rows.length > 0) {
    await Promise.map(
      rows,
      async row => {
        if (DO_DRY_RUN) {
          console.log('Would be cancelling Task Id: ' + row);
        } else {
          await new Promise((resolve, reject) => {
            client.cancelTask(row, (err, task) => {
              // do something with task
              if (err) {
                console.error(err);
                reject(err);
              } else {
                console.log(`Task Cancelled: ${task.task_id}`);
                resolve();
              }
            });
          });
        }
      },
      { concurrency: 10 },
    );

    console.log('Finished Running Script');
  }
}());

let readCsv = function(fileName, hasHeader = false) {
  const rows =
    fs.readFileSync(fileName, { encoding: 'utf8' })
      .split('\n')
      .map(s => s.trim()) || [];

  return hasHeader && rows.length > 0 ? rows.splice(1) : rows;
}

let getIdsFromCsv = function(fileName, hasHeader) {
  return readCsv(fileName, hasHeader).filter(s => s.length === 24);
};