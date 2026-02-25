class Aptech{
    students(){
        this.name = "Ali";
        console.log("This is my Students Method");
        console.log(this.name);
    }

    staff(a, b){
        this.name = a;
        this.email = b;
        console.log(`Name is ${this.name} & Email is ${this.email}`);
    }
}

const daniyal = new Aptech();   // object
const sohaib = new Aptech();   // object

// daniyal.students();
sohaib.staff("Sohaib", "sohaib@gmail.com");