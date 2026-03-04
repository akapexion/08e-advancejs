class Parent{
    test1(){
        console.log("Parent Class Custom Method");
    }
}

class Child extends Parent{
    test2(){
        console.log("Child Class Custom Method");
    }
}


const azan = new Child();

azan.test1();