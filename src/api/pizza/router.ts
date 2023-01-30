import { Router } from "express";
import pizzHandler from "./pizza.handler";

export const router = Router();

router.post('/pizza', pizzHandler.createPizz);
//router.get('/pizza', pizzHandler.getPizz);
//router.delete('/pizza', pizzHandler.sendPizz);

