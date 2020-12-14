const express = require(`express`);
const app = express();
const path = require(`path`)


/* Configuracion de express */
app.set(`puerto`, 80);
app.set(`views`,path.join(__dirname, `vistas`));
app.engine(`html`,require(`ejs`).renderFile);
app.set("view engine", `ejs`);

/* Rutas */
app.get(`/`,(req,res)=>{
res.render(`index.html`,{titulo: `Inicio`});
});

app.get(`/contactos`,(req,res)=>{
    res.render(`contactos.html`,{titulo: `Pagina de contactos`});
});
app.get(`/nosotros`,(req,res)=>{
    res.render(`nosotros.html`,{titulo: `Acerca de nosotros`});
});
app.get(`/correcto`,(req,res)=>{
    res.render(`correcto.html`,{titulo: `correcto el formulario`});
});

app.get(`/programacion`,(req,res)=>{
    res.render(`programacion.html`,{titulo: `programacion`});
});

/* Archivos estaticos
 */
app.use(express.static(path.join(__dirname,`vistas/public`)));

app.listen(process.env.PORT || app.get(`puerto`), ()=>{  
 console.log("Servidor Web trabajando en el puerto", app.get(`puerto`)); 
});
