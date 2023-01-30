export interface IPizzaService {
    getPizza(ingredients: string[], base: string): string;
}


export class PizzaService implements IPizzaService {

    getPizza(ingredients: string[], base: string): string {
        const pizz = this.cookPizza(ingredients, base);

        return pizz.getDescription() + ', prix ' + pizz.getPrice()
    }

    private cookPizza(ingredients: string[], base: string): Pizza {

        let pizza:Pizza;

        if (base == "creme") {
            pizza = new BasicPizzaCreme()
        } else {
            pizza = new BasicPizzaTomate()
        }
        //let ingredient =["champignon", "jambon", "poulet", "chorizo", "fromage"]
       console.log(pizza)
            ingredients.forEach((ingredient) => {
                console.log(ingredient)
                if(ingredient == 'champignon' ) pizza = new Champignon(pizza)
                if(ingredient == 'jambon' ) pizza = new Jambon(pizza)
                if(ingredient == 'poulet' ) pizza = new Poulet(pizza)
                if(ingredient == 'chorizo' ) pizza = new Chorizo(pizza)
                if(ingredient == 'fromage' ) pizza = new Fromage(pizza)
            });
        

        return pizza
    }

}

export interface Pizza {
    getDescription(): string;
    getPrice(): number;
}

class BasicPizzaTomate implements Pizza {
    getDescription(): string {
        return "Pizza base sauce tomate";
    }
    getPrice(): number {
        return 8;
    }
}

class BasicPizzaCreme implements Pizza {
    getDescription(): string {
        return "Pizza base Creme";
    }
    getPrice(): number {
        return 10;
    }
}

abstract class IngredientDecorator implements Pizza {
    constructor(pizza: Pizza) {
        this.pizza = pizza
    }

    abstract getDescription(): string 
    abstract getPrice(): number 
    protected pizza: Pizza;

}


class Champignon extends IngredientDecorator {
    getDescription(): string {
        return this.pizza.getDescription() + ', Champignon'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 2;
    }
} 

class Jambon extends IngredientDecorator {
    getDescription(): string {
        return this.pizza.getDescription() + ', Jambon'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 5;
    }
} 


class Poulet extends IngredientDecorator {
    getDescription(): string {
        return this.pizza.getDescription() + ', Poulet'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 10;
    }
}

class Chorizo extends IngredientDecorator {
    getDescription(): string {
        return this.pizza.getDescription() + ', Chorizo'
    }
    getPrice(): number {
        return this.pizza.getPrice() + .5;
    }
} 

class Fromage extends IngredientDecorator {
    getDescription(): string {
        return this.pizza.getDescription() + ', Fromage'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 1.5;
    }
} 
