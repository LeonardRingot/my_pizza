import { Request, Response } from "express";
import { IPizzaService, PizzaService } from "./pizza.service";


class PizzaHandler {

    private pizzService: IPizzaService;

    constructor(pizzService: IPizzaService) {
        this.pizzService = pizzService;
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    createPizz = (req: Request, res: Response) => {

        const pizzTodo: PizzRequest = req.body;

        console.log(pizzTodo);
    
        let pizz: string = "";
        try {
            pizz = this.pizzService.getPizza(pizzTodo.ingredients, pizzTodo.base);

        } catch(err) {
            console.log(err)
        }
    
        res.json(pizz)
    }

 

}


interface PizzRequest {
    base: string
    ingredients: string[]
}

const pizzHandler = new PizzaHandler(new PizzaService())
export default pizzHandler;