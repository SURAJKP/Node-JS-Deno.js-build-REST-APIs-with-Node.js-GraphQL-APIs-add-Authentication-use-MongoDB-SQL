const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<title>NodeJS Application</title>');
        res.write('<body><form action=/message method=POST><input type=text name=message /><button type=submit>submit</button></form></body>');
        res.write('</html>');
        return res.end();
    } 
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.setHeader('Location', '/');
        res.statusCode = 302;
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<title>NodeJS Application</title>');
    res.write('<body>Hello World</body>');
    res.write('</html>');
    res.end();
};

// export module
//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     sometext: 'Hello Everyone',
// };

// module.exports.handler = requestHandler;
// module.exports.sometext = "Hello World";

exports.handler = requestHandler;
exports.sometext = "Hello World";