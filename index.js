import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"
import routerMaterias from "./src/routers/materia.routes.js";
import routerAula from "./src/routers/aula.routes.js";
import routerCarrera from "./src/routers/carrera.routes.js";
import routerClase from "./src/routers/clase.routes.js";
import routerComision from "./src/routers/comision.routes.js";
import routerComision_Materia from "./src/routers/comision_materia.routes.js"
import routerMateria_Carrera from "./src/routers/materia_carrera.routes.js";
import routerOtro from "./src/routers/otros.routes.js";
import routerPlanta from "./src/routers/planta.routes.js";
import routerProfesor from "./src/routers/profesor.routes.js";

import "./src/database/database.js"



const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>{console.log("estoy en el puerto "+app.get("port"))});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use("/api/materia", routerMaterias);
app.use("/api/aula", routerAula);
app.use("/api/clase", routerClase);
app.use("/api/comision", routerComision);
app.use("/api/comision_materia", routerComision_Materia);
app.use("/api/materia_carrera", routerMateria_Carrera);
app.use("/api/otros", routerOtro);
app.use("/api/planta", routerPlanta);
app.use("/api/profesor", routerProfesor);
app.use("/api/carrera", routerCarrera);


