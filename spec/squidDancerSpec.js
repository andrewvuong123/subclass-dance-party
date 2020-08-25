describe('squidDancer', function() {

  var squidDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squidDancer = new makeSquidDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(squidDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it appear', function() {
    sinon.spy(squidDancer.$node, 'toggle');
    squidDancer.step();
    expect(squidDancer.$node.toggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(squidDancer, 'step');
      expect(squidDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(squidDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squidDancer.step.callCount).to.be.equal(2);
    });
  });
});
