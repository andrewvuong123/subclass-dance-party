var makePikachu = function(top, left, timeBetweenSteps) {
  // call statement
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="pikachu" src="img/pikachu.gif"></img>');
};

// prototype chain
makePikachu.prototype = Object.create(makeDancer.prototype);

// constructor
makePikachu.prototype.constructor = makePikachu;

makePikachu.prototype.step = function() {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node;
};

