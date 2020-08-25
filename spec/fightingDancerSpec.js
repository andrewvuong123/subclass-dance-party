describe('fightingDancer', function() {

  var fightingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fightingDancer = new makeFightingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fightingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its appear', function() {
    sinon.spy(fightingDancer.$node, 'toggle');
    fightingDancer.step();
    expect(fightingDancer.$node.toggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fightingDancer, 'step');
      expect(fightingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(fightingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fightingDancer.step.callCount).to.be.equal(2);
    });
  });
});
