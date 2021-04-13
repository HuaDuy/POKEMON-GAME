class Lab3 {

    bai1() {
        //bai1.1
        var sum = (x:number, y:number) :number => {
            return x + y;
        }

        function sum1(x:number, y:number) :number{
            return x + y;
        }

        //bai1.2
        var sum2 = (x, y = 5) => {
            return x + y;
        }

        var sum3 = (x: number = 3, y: number = 4) => {
            return x + y;
        }
        console.log(sum3())


        //bai1.3
        const hobbies = ['Sports', 'Cooking'];
        const activehobbies = ['Hiking'];
        activehobbies.push(...hobbies);
        activehobbies.push(hobbies[0], hobbies[1])
        console.log(activehobbies)

    }

    bai2() {

        //bai2.1
        let sum = (x: number = 5, y?: number) => { return x + <number>y; };
        let speech = (output: any): void => {
            console.log("Result:" + output);
        }
        speech(sum(5, 12));
        console.log(speech(sum(8, 5)));

        //bai3.2
        let something: void = undefined;
        // let nothing: never = Number; // Error: type 'null' is not assignable to type 'never'
        function throwEroor(errorMsg: string): never {
            throw new Error(errorMsg)
        }

        //bai3.3
        function AddandHandle(x: number, y: number, cb: (num: number) => void) {
            const result = x + y;
            cb(result);
        }
        AddandHandle(10, 20, (result) => { console.log(result) })
    }

}
export default Lab3;