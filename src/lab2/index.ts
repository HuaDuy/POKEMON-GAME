interface shuffle {
    id: number;
    name: string;
    image: string;
    type: string;
}
class Lab2 {
    bai1() {
        //bai1.1
        let number1: number = 5;
        let number2: number = 2.5;
        let phrase: string = 'Result is: ';
        let permit: boolean = true;

        const result = number1 + number2;
        if (permit) {
            console.log('lab2.bai1.1: ' + phrase + result);
        } else {
            console.log('Not show result');
        }

        //Bai1.2
        function add(x = 5) {
            let phrase = 'Result is: ';
            phrase = String(10);
            x = Number('2.8');

            return Number(phrase) + x;
        }
        let results: number = add();
        console.log('lab2.bai1.2: ' + results)

        /////bai1.3
        var person: {
            name: string;
            age: number;
            
        }
        
        person = {
            name: "Typescript",
            age: 11
        }
        console.log('lab2.bai1.3: ' + person.name)
    };
    bai4() {
        //bai4.1
        enum Role { ADMIN, READ_ONLY, AUTHOR };
        const person: {
            name: string,
            age: number,
            hobbies: string[],
            role: string,
            roletupe: [number, string]
        } = {
            name: 'Typescript',
            age: 11,
            hobbies: ['Sport', 'cooking'],
            role: String(Role.ADMIN),
            roletupe: [2, 'author']
        }

        let favouriteActivites: any[];
        favouriteActivites = [5, 'sports', true];

        if (person.role === String(Role.AUTHOR)) {
            console.log('is author');
        }
        person.roletupe.push('admin');
        person.roletupe[1] = ('haha');
        person.roletupe = [0, 'admin'];


        // bai4.2
        type Combinable = number | string;
        function combine(input1: Combinable, input2: number | string, resultConversion: 'as-number' | 'as-text') {
            let result;
            if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
                result = Number(input1) + Number(input2);
            } else {
                result = input1.toString() + input2.toString();
            }
            return result;
        }

        const combineNumber = combine(30, 26, 'as-number');
        console.log(combineNumber);

        const combineStringNumber = combine('30', '26', 'as-number');
        console.log(combineStringNumber);

        const combineText = combine('typrscript', 'javascript', 'as-number');
        console.log(combineText);

        //bai 4.3
        var a = null;
        console.log(a);
        console.log(typeof (a));

        
        //
        var b;
        console.log(b);
        console.log(typeof (a));
        var undeclaredVar = "hưqdv"
        console.log(undeclaredVar);


        //bài 4.4
        let userInput: unknown;
        let userName: string;

        userInput = 5;
        userInput = 'Typescript';
        userName = String(userInput);
        userName = <string>userInput;
        if (typeof userInput === 'string') {
            userName = userInput;
        }

    };


    async shuffle() {

        const pokemons: number = 20;
        interface PokemonInterface {
            id: Number;
            name: String;
            image: String;
        }
        let arrPokemons: PokemonInterface[] = [];

        for (let i = 1; i <= pokemons; i++) {
            let data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            let pokemon: any = await data.json();
            arrPokemons = [...arrPokemons, { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.back_default }]
        }



        const content = document.querySelector('#content');
        content.innerHTML = arrPokemons.map(x => {
            return /*html*/ `
                
                <div class="border border-gray-400 ">
                    <span class=" bg-yellow-700  px-2  text-white text-xs">$ ${x.id}</span>
                    <img class="mx-auto w-3/5" src="${x.image}" />
                </div>

            `
        }).join("")
        return arrPokemons;

    }
}


export default Lab2;