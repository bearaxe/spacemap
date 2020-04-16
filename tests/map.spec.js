const expect = require('chai').expect;
require('mocha');

const bodyGen = require('../src/bodyGen');

/*
STAGE 1
when generating the map
  it should create an array
  the array should have location data objects

when generating location data
  it should have an xyz position
  it should never repeat exact xyz between 2 data points


STAGE 2
-point seeding (map seeding)
-map chunking (pretty sure this has to be 3d)
*/

describe('mapper', () => {
  it('should should create an array of a desired size', () => {
    const results = bodyGen.createMap(16);
    expect(results.length).to.equal(16);
  })

  describe('location data', () => {
    it('should have an xyz position as integers', () => {
      const [results, ...a] = bodyGen.createMap();
      expect(typeof results.x).to.equal('number');
      expect(typeof results.y).to.equal('number');
      expect(typeof results.z).to.equal('number');
    });

    it('should not repeat xyz positions', () => {
      const [first, second, third, ...theRest] = bodyGen.createMap(4);
      expect(first).to.not.eql(second);
      expect(first).to.not.eql(third);
      expect(second).to.not.eql(third);
    })
  })
})