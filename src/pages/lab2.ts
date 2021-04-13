export default class lab2 {
    bai1() {
        let number1: number = 5;
        let number2: number = 2.8;
        let phrase: string = 'Result is ';
        let permit: boolean = true;

        const result = number1 + number2;
        if (permit) {
            console.log(phrase + result);
        } else {
            console.log('Not show result');
        }
    }

    bai2() {
        function add(x = 5) {
            let phrase = 'Result is ';
            return phrase + x;
        }
        let result: string = add();
        console.log(result);

    }

    bai3() {
        var person: {
            name: string,
            age: number
        }
        person = {
            name: "TypeScript",
            age: 11
        }
        console.log(person.name);
    }
    async bai4() {
        const pokemons: number = 20;
        interface PokemonInterface{
            id: number,
            name: string,
            image: string
        }
        let arrPokemon: PokemonInterface[] = [];
        for(let i=9 ; i < pokemons; i++){
            let data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            let pokemon: any = await data.json();            
            arrPokemon = [...arrPokemon, { id: pokemon.id , name: pokemon.name, image: pokemon.versions.front_default}];
        }
        arrPokemon.forEach(item => {
            console.log(item.image);
        })
        ;
    }
}