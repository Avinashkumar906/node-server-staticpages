const fs = require('fs');

const requestHandler = (req,res)=>{
    console.log('hi\n' + req)
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write(`
        <html>
        <head><title>first page</title></head>        
        <body>
        <form action='/message' method='POST'>
        <input type='text' name="message">
        <button type='submit' >submit</button>
        </form>
        </body>
        </html>
        `);
        res.end();
        return;
    }
    if(url === '/message'){
        let reqBody = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            reqBody.push(chunk);
        });
        req.on('end',()=>{
            const parseBody = Buffer.concat(reqBody).toString();
            const message = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('location','/');
        res.end();
        return ;
    }
};

module.exports = requestHandler; 