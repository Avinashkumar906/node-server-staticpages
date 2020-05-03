//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angularN5xtemplate'));
app.use(express.static(__dirname + '/dist/miraclecharitablesociety'));
app.use(express.static(__dirname + '/dist/asquarecf'));
app.use(express.static(__dirname + '/dist/asquaregq'));

app.get('/angularN5xtemplate*', (req,res,next)=> {    
    res.sendFile(path.join(__dirname+'/dist/angularN5xtemplate/index.html'));
});
app.get('/miraclecharitablesociety*', (req,res,next)=> {    
    res.sendFile(path.join(__dirname+'/dist/miraclecharitablesociety/index.html'));
});
app.get('/asquarecf*', (req,res,next)=> {    
    res.sendFile(path.join(__dirname+'/dist/asquarecf/index.html'));
});
app.get('/asquaregq*', (req,res,next)=> {    
    res.sendFile(path.join(__dirname+'/dist/asquaregq/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080,()=>console.log('server started!'));