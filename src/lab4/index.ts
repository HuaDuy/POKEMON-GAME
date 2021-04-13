class Lab4 {
    bai1() {
        interface AddFn {
            (a: number, b: number): number;
        }
        let add: AddFn;

        add = (n1: number, n2: number) => {
            return n1 + n2;
        };
        // console.log(add(2, 3));
    }
    bai2() {
        // interface Named {
        //     readonly name?: string;
        //     outputName?: string;
        // }

        // interface Greetable extends Named {
        //     greet(phrase: string): void;
        // }

        // let user1: Greetable;
        // user1 = new Person();
        // user1.greet('hi there - I am')
    }

    bai3() {
        abstract class Department {
            static fiscalYear = 2020;

            protected employees: string[] = [];

            constructor(protected readonly id: string, public name: string) {

            }

            static createEmployee(name: string) {
                return { name: name };
            }

            abstract describe(this: Department): void;

            addEmployee(employee: string) {
                this.employees.push(employee);
            }

            printEmplyeeInformation() {
                console.log(this.employees.length);
                console.log(this.employees)
            }


        }

        class ITDepartment extends Department {
            admins: string[];
            constructor(id: string, admins: string[]) {
                super(id, 'IT');
                this.admins = admins;
            }

            describe() {
                console.log('IT Department - ID' + this.id);
            }
        }

        const employee1 = Department.createEmployee('Max');
        console.log(employee1, Department.fiscalYear);

        const it = new ITDepartment('d1', ['Max']);
        it.addEmployee('Max');
        it.addEmployee('Manu');
    }

    async bai4(){
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
            arrPokemon = [...arrPokemon, { id: pokemon.id , name: pokemon.name, image: pokemon.sprites.front_default}];
        }
        arrPokemon.forEach(item => {
            console.log(item.image);
        })
    }
}

export default Lab4;