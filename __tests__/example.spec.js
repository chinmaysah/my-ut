const { example } = require('../index');

/* // mocking DB. apply before all test starts
beforeAll(() => {
  console.log('before all is called.');
});
// apply after all test finish, e.g. clean up, env setting variables.
afterAll(() => {
  console.log('After all is called.');
});
// called before each spec/test run. resetting variable test depend upon 
beforeEach(() => {
  console.log('before each is called.');
});
// called after each spec is run. clean up job
afterEach(() => {
  console.log('after each is called.');
}); */

describe.only('example module', () => {
  it('should be defined', () => {
    expect(example).toBeDefined();
  });
  xit('should be a function', () => {
    expect(typeof example).toEqual('function');
  });

  it('should return the name with greetings', () => {
    // Arrange
    const name = 'Chinmay';

    // Act 
    const greetings = example().getName(name);

    // Assert
    expect(greetings).toEqual(`Hello ${name}`);
    expect(greetings).toContain(name);
  });
})