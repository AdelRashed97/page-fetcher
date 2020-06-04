const request = require('request');
const fs = require("fs");

const args =  process.argv.slice(2);
const url = args[0];
const localPath = args[1];

request(url, (error, response, body) => {
  fs.writeFile(localPath,body,(error) => {
    if (error) {
      // Handle error
      console.log("Failed to write to file");
      return;
    }
    // Success!
    fs.stat(localPath,(error,stats) => {
      if (!error) {
        
        console.log(`Download and saved ${stats.size} bytes to ${localPath}`);
      }
    });
  });
  
});


