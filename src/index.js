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

/* Archivos estaticos
 */
app.use(express.static(path.join(__dirname,`vistas/public`)));

app.listen(process.env.PORT || app.get(`puerto`), ()=>{  
 console.log("Servidor Web trabajando en el puerto", app.get(`puerto`)); 
});
