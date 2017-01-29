class Greeter {
    constructor(greeting) {
        this.greeting = greeting;
    }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}
;
var greeter = new Greeter("Hello,world,guanyu123456!");
document.body.innerHTML = greeter.greet();
//# sourceMappingURL=greeter.js.map