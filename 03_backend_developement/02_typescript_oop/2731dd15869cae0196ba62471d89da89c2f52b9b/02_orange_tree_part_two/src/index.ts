// Use this file to test your `OrangeTree` class.
import { OrangeTree } from "./OrangeTree";
abstract class Tree {
    age: number ;
    height: number = 0;
    alive: boolean = true;  
    constructor(age: number){
        this.age = age;
        if (age <= 9){
          this.height = this.height + 25 * age ;
        }
        else if (age <= 20) {
          this.height = this.height + 10 * age + 135;
        }
        else if (age > 20){
            this.height = 335; 
        }
    }
    
    abstract ageOneYear(): void ;   
    abstract isAlive(): boolean; 
    seed():void{
        this.age = 0; 
        this.height =0;
        this.alive = true; 
    }
}     
// Code the class here.

// Leave the line below for tests to work properly.
export { Tree };

const youngOrangeTree = new OrangeTree(0);
