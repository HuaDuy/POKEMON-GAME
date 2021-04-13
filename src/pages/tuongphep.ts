import Tuong from "./tuong"

class TuongPhep extends Tuong{
    ulti: string;
    constructor(name: string, skill: string, profile: string, ulti: string){
        super(name, skill, profile);
        this.ulti =  ulti;
    }
    showInfo(): void{
        console.log(
                    `
                    Ten: ${this.name}
                    Ki nang: ${this.skill}
                    Thong tin: ${this.profile}
                    Chieu cuoi: ${this.ulti}`
                    )
    }
}
export default TuongPhep