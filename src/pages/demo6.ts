export default class Chap06{
    name: string;
    constructor(n: string){
        this.name = n;
    }
    describe(){
        console.log(`Department is ${this.name}`)        
    }
}