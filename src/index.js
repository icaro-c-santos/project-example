import express from 'express';
import bodyParser from "body-parser";
import { getUsers,getUserId,addUser,removeUser, initBd} from './banco.js';


const app = express();

initBd();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


app.get("/", (req, res) => {
    try {
        res.status(200).send("SERVIDOR OK!");
    } catch (error) {
        res.status(500).send();
    }
})

app.get("/users", (req, res) => {
    try {
        res.status(200).json(getUsers());
    } catch (error) {
        res.status(500).send();
    }
})

app.get("/users/:id", (req, res) => {
    try {
        const id = req.params.id;
        const user = getUserId(id);
        if(user.length==0){
            res.status(404).send();
        }
        res.status(200).json(getUserId(id));
    } catch (error) {
        res.status(500).send();
    }
})

app.post("/users", (req, res) => {
    try {
        const user = req.body;
        addUser(user);
        res.status(201).send();
    } catch (error) {
        res.status(500).send();
    }
})

app.delete("/users/:id", (req, res) => {
    try {   
        const id = req.params.id;
        removeUser(id);
        res.status(200).send();

    } catch (error) {
        res.status(500).send();
    }
})


app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);