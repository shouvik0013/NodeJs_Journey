const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="msg"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url ==='/message' && method === 'POST') {
        const body = [];
        console.log('Inside');
        // nodeJs will execute following code multiple times
        // until it pulls-out all the data
        // every time a new chunk is ready to read
        // the anonymous function will be executed
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // the following code section will be executed
        // after all the chunks is read
        return req.on('end', () => {
                              // it will create a new Buffer and concat all the contents of body or chunks to the Buffer
                              // by calling toString() we are converting the contents of the Buffer into a string
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // here we use writeFileSync
            // it will block execution of code
            // it will be blocked untill the file
            // is written
            // fs.writeFileSync('message.txt', message);
    
            // the following code is asynchronous code
            // callback function will be called after
            // we have written into the file
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;   // redirect code
                res.setHeader('Location', '/'); // Location is the default header accepted by the browser and we set it to '/'
                console.log('Inside End');
                return res.end();
            });
        });
        
        // Code Section-B
        res.statusCode = 302;   // redirect code
        res.setHeader('Location', '/'); // Location is the default header accepted by the browser and we set it to '/'
        console.log('Inside End');
        return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};