const http=require('http');
const info=http.createServer((req, res)=>{
        const url=req.url;
        res.setHeader('Content-Type', 'text/html');
        if(url === "/"){
                res.write('<html>');
                res.write('<head><title>Enter data</title></head>');
                res.write(`<body>
                        <form action="/msg" method="POST"><input type="text" name="message"/>
                        <button type=""Submit>send</button>
                        </form>
                        </body>`)
                res.write('</html>');
               return res.end(); res.setHeader('Content-Type', 'text/html');
        }
       
        res.write('<html>');
        res.write('<head><title>Hello From Node JS>/title></head>');
        res.write('<body><p> This is me </p></body>')
        res.write('</html>');
        res.end();
});
info.listen(3000);