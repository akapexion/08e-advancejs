class Aptech{
    constructor(data){
        this.content = data;
        console.log(`This is my Construtor Method with Data ${this.content}`);
    }
    management(){
        console.log("This method is for Management.");
    }
    students(name){
        this.name = name;
        console.log(`This method is for Student : ${this.name}`);
    }
    faculty(emp_id){
        this.emp_id = emp_id;
        console.log(`This method is for Faculty whose Employee ID is ${this.emp_id}`);
    }
}

const asad = new Aptech("He is a Faculty");
const daniyal = new Aptech("He is a Student");
const talha = new Aptech("He is a Student");
const ryan = new Aptech("He is a Student");
const jagdesh = new Aptech("He is a Student");

// daniyal.students("Daniyal");
// talha.students("Talha");
// ryan.students("Ryan");
// jagdesh.students("Jagdesh");
asad.faculty(199);