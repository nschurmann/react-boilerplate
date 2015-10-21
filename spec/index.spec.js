import assert from 'assert';
import rewire from 'rewire';
import sinon from 'sinon';
let Kitten = rewire('../src/index');

let consoleMock = {
  log: (x) => x
};

sinon.mock(consoleMock);

let log = (x) => console.log(x);

Kitten.__set__('console', consoleMock);

let kitten = new Kitten();


describe('Kitten', function () {
  it('should meow', function () {
    kitten.meow();
    sinon.mock(consoleMock)
      .expects('log')
      .atLeast(1)
      .withArgs('meow');
  });

  it('name is Peanut', function() {
    assert.equal(kitten.name, 'Peanut');
  });
});