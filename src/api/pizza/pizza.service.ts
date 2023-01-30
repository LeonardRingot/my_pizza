
export interface IPizzaService {
    getPizza(ingredients: string[], base: string): string;
}


export class PizzaService implements IPizzaService {

    getPizza(ingredients: string[], base: string): string {
        const pizz = this.cookPizza(ingredients,base);

        return pizz.getDescription() + ', prix ' + pizz.getPrice()
    }

    private cookPizza(ingredients: string[], base: string): Pizza {

        //TODO pattern decorator ici

        return new BasicPizza() // il faut retourner une pizza de base enrichie des ingrédients avec la modif dynamique du prix et des ingrédients
    }

}

export interface Pizza {
    getDescription(): string;
    getPrice(): number;
}

class BasicPizza implements Pizza {
    getDescription(): string {
        return "Pizza base sauce tomate";
    }
    getPrice(): number {
        return 8;
    }
}