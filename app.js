const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000

const indexPage = fs.readFileSync('index.html')


const server = http.createServer( (req,res) => {
    if (req.url === '/'){
        return res.end(indexPage)
    }else{
        res.statusCode = 404
        res.end('Sayfa bulunamadı')
    }
});

server.listen(port, hostname, ()=> {
    console.log(`Server Çalışıyor, http://${hostname}:${port}`);
});

