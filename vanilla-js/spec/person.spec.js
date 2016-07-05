describe('Person', function() {
  var john;

  beforeEach(function() {
    john = new Person('John');
  });

  describe('#constructor()', function() {
    it('should set passed argument as a name property', function(){
      expect(john.name).toBe('John');
    });
  });

  describe('#sayHello()', function() {
    it('should return a greeting', function(){
      expect(john.sayHello()).toBe('Hello, my name is John!');
    });
  });

  describe('#sayGoodbye()', function() {
    it('should return a goodbye', function(){
      expect(john.sayGoodbye()).toBe('Goodbye!');
    });
  });
});
