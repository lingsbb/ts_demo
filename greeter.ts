class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello,world,guanyu123456!");
    
document.body.innerHTML = greeter.greet();