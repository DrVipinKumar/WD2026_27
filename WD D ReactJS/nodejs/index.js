http =require("http");
path=require("path");
fs=require("fs")
const main=(req,res)=>{
    //http://localhost:3000/read?fname=abc.txt&&content=this is my file data
    const parsedUrl=new URL(req.url,`http://${req.headers.host}`);
    const pathname=parsedUrl.pathname;
    const fname=parsedUrl.searchParams.get("fname");
    const content=parsedUrl.searchParams.get("content");
    if(!fname){
        res.writeHead(400);
        res.end("File name and content not pass!");
        return;
    }
    const fileDir=path.join(__dirname,"files");
    const filename=path.join(fileDir,fname)
    if(pathname==="/delete" && req.method==="DELETE"){
        if(fs.existsSync(filename)){
             fs.unlink(filename,(error)=>{
                  if(error){
                      res.writeHead(400,{"content-type":"text/html"})
                      res.end(JSON.stringify({"error":"File not delete!"}))
                return;
                  }
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(JSON.stringify({"error":"File deleted!"}))
                return;
             })
        } else {
                res.writeHead(200,{"content-type":"text/html"})
                res.end(JSON.stringify({"error":"File already deleted!"}))
                return;
        }
    }
    if(pathname==="/append" && req.method==="PUT"){
         if(!content){
                res.writeHead(400,{"content-type":"text/html"})
                res.end(JSON.stringify({"error":"Content not found"}))
                return;
          } else {
              fs.appendFile(filename,content||"","utf8",(error)=>{
                   if(error){
                    res.writeHead(404,{"content-type":"text/html"})
                    res.end(JSON.stringify({"error":"Not able to write or file not found"}))
                    return;
                   }
                   res.writeHead(201,{"content-type":"text/html"})
                   res.end("<h2>File updated with content!</h2>")
              })
            } 
          } 
    
    if(pathname==="/write" && req.method==="POST"){
          if(!content){
                res.writeHead(400,{"content-type":"text/html"})
                res.end(JSON.stringify({"error":"Content not found"}))
                return;
          } else {
              if(!fs.existsSync(filename)){
              fs.writeFile(filename,content||"",(error)=>{
                   if(error){
                    res.writeHead(404,{"content-type":"text/html"})
                    res.end(JSON.stringify({"error":"Not able to write or file not found"}))
                    return;
                   }
                   res.writeHead(201,{"content-type":"text/html"})
                   res.end("<h2>File created with content!</h2>")
              })
            } else {
                 res.writeHead(200,{"content-type":"text/html"})
                 res.end(JSON.stringify({"error":"File already exists"}))
                   return
            }            
          } 
    }
    if(pathname==="/read" && req.method==="GET"){
        fs.readFile(filename,"utf8",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                res.end(JSON.stringify({"error":"File not found"}))
                return;
            }
            res.writeHead(200,{"content-type":"text/html"})
            res.end(`<pre>${data}</pre>`);
        })
    }
};
const server=http.createServer(main);
server.listen(3000,(error)=>{
   if(error){
    console.log(error)
   }
   console.log("Running server on:http://127.0.0.1:3000")
})