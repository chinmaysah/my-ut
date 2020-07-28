module.exports = function example() {
  const self = this;

  self.getName = name => `Hello ${name}`;

  return self;
}