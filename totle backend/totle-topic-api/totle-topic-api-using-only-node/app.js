const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const PORT = 3000;
const DATA_PATH = path.join(__dirname, 'data', 'topics.json');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = parse query string
  console.log(parsedUrl);
  const pathname = parsedUrl.pathname;
  console.log(pathname);
  const query = parsedUrl.query;
  console.log(query);
  if(req.method === 'GET' && pathname === '/api/topics'){
    const search = query.search;
    // server error
    if( !search || typeof search !== 'string'){
        res.writeHead(500,{'Content-Type':'application/json'});
        return res.end(JSON.stringify({error : "Invalid or missing 'search' query parameter."}));
    }
    // reading file
    fs.readFile(DATA_PATH, 'utf-8',(err , data)=>{
      // reading dile error
      if(err){
        console.error("file read error:" , err);
        res.writeHead(500,{'Content-Type':'application/json'});
        return res.end(JSON.stringify({ error: "Server error while reading topics." }));
      }
      try {
        // parsing data
        let topics = JSON.parse(data);
        let filtered = topics.filter(topic => topic.name.toLowerCase().includes(search.toLowerCase()));
        //  appling bonus
        if( query === 'name'){
          filtered.sort((a,b)=> a.name.localCompare(b.name));
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(filtered));
//  in case of parse error 
      } catch (parserErr) {
        console.error("JSON parse error:", parserErr);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Error parsing data file." }));
      }
    });
  } else {   
    // no route found or invalid request
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Route not found." }));
  }
  });

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
