// const http=require('http');
// const info=http.createServer((res, req)=>{
//         console.log(res.url, req.method, req.headers);
//         // process.exit();
// });
// info.listen(3000);


const http=require('http');
const info=http.createServer((req, res)=>{
        console.log(req.url, req.method, req.headers);
        // process.exit();
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Hello From Node JS</title></head>');
        res.write(`<body>
                <p> This is me sdfjsdfjsfksdfk ksdfksdfksfk kvksfksdf<br>
                erwrwerwerwerwerwerewrwererw
                 </p>
                </body>`);
        res.write('</html>');
        res.end();
});
info.listen(3000);