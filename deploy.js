if (process.env.NODE_ENV === 'production') {
  var child_process = require('child_process');
  child_process.exec('NODE_ENV=production webpack -p --config webpack.production.config.js', (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
}
