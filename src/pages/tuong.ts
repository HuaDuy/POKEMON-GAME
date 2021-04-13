class Tuong{
    name: string;
    skill: string;
    profile: string;
    constructor(name: string, skill: string, profile: string){
        this.name = name;
        this.skill = skill;
        this.profile = profile
    }
    showInfo(): void{
        console.log(`Ten: ${this.name}
                    Ki nang: ${this.skill}
                    Thong tin: ${this.profile}`)
    }
}

export default Tuong