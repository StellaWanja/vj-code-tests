const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use('/css', express.static(__dirname + 'dist/css'));
app.use('/js', express.static(__dirname + 'dist/js'));
app.use('/src', express.static('src') , function(req, res){
    // Optional 404 handler
    res.status(404);
    res.json({error:{code:404}})
});

app.get('/', (req,res) => {
    res.sendFile('/dist/index.html', { root: __dirname });
});

app.listen(port, () => console.log("app runs perfectly"));
