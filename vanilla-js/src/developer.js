function Developer(name, position) {
    Person.apply(this, arguments);
    this.position = position;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.sayHello = function() {
    return Person.prototype.sayHello.apply(this, arguments) + ' I\'m a ' + this.position + '!';
};
