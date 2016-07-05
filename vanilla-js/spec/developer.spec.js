describe('Developer', function() {
  var tom;

  beforeEach(function() {
    tom = new Developer('Tom', 'Senior FE Developer');
  });

  describe('#constructor()', function() {
    it('should set first argument as a name property', function(){
      expect(tom.name).toBe('Tom');
    });

    it('should set second argument as a position property', function(){
      expect(tom.position).toBe('Senior FE Developer');
    });
  });

  describe('#sayHello()', function() {
    it('should return a developer\'s greeting', function(){
      expect(tom.sayHello()).toBe('Hello, my name is Tom! I\'m a Senior FE Developer!');
    });
  });

  describe('#sayGoodbye()', function() {
    it('should return a goodbye', function(){
      expect(tom.sayGoodbye()).toBe('Goodbye!');
    });
  });
});
