import {Log, LogClass} from "./decorators";

@LogClass("info")
export class Person {

    constructor(protected name: string, public age: number){
        setTimeout(() => {
            console.log(this.name);}, 500);
    }

    @Log()
    welcome() {
        return `Hello ${this.name}, ${this.age}`;
    }

    isAdult(){
        if(this.age >= 18){
            return true;
        } else {
            return false;
        }
    }
}

export class Customer extends Person {

    constructor(name: string, age: number, public advisor: string) {
        super(name, age);
    }
    override; welcome(): string {
        return `Good morning ${this.name}, advised by ${this.age}`;
    }
}

//export let persons = [new Person("Jan", 33), new Person("Zofia", 44), new Person("Zbychu", 22)];

export function welcome(): string {
    return "HEEEEELLLOOO";
}