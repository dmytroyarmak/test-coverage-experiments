function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return 'Hello, my name is ' + this.name + '!';
};

Person.prototype.sayGoodbye = function() {
    return 'Goodbye!';
};
