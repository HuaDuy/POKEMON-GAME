export default class demo{
    render(){
        function show1<T extends number>(a: T , b:T): T | number{
            return a + b;
        }
        console.log(show1<number>(3,4));
        
        class Product<X,Y,Z>{
            id: X;
            name: Y;
            price: Z;
            constructor(id: X, name:Y, price:Z){
                this.id = id;
                this.name = name;
                this.price = price;
            }
            showInfo():void {
                console.log(
                    `
                        ID: ${this.id}
                        name: ${this.name}
                        price: ${this.price}
                    `
                );
                
            }
            show<T>(list: T[]): void{
                console.log(list);
            }
        }
        
        
        const iphone = new Product<number, string, number>(1, "IPHONE" , 20);
        iphone.showInfo();
        
        const nokia = new Product<number, string, string>(2, "NOKIA", "30$")
        nokia.showInfo();
    }
}