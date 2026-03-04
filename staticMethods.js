class E08{
    constructor(){
        console.log("Constructor Method");
    }
    test(){
        console.log("This is a Custom Method");
    }
    static specialMet(){
        console.log("This is a Static Method");
    }
}

const keertan = new E08();

E08.specialMet();
keertan.test();