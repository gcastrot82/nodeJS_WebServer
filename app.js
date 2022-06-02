const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


// TODO: Require('hbs') Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials')

// Middleware para servir contenido estatico
app.use( express.static('public'));


app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'/public/index.html')
    
    // Usar HBS
    res.render('home',{
        nombre: 'Gerardo Castro',
        titulo: 'Cursode nodeJs'
    });
})

app.get('/generic',(req,res)=>{
    // res.sendFile(__dirname+'/public/generic.html')
    res.render('generic',{
        nombre: 'Gerardo Castro',
        titulo: 'Cursode nodeJs'
    });

})


// app.get('/elements',(req,res)=>{
//     res.sendFile(__dirname+'/public/elements.html')
// })


app.get('/elements',(req,res)=>{

    res.render('elements',{
        nombre: 'Gerardo Castro',
        titulo: 'Cursode nodeJs'
    });
})



app.listen(port,()=>{
    console.log(`App escuchando en http://localhost:${port}`);
})