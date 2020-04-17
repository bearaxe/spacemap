const expect = require('chai').expect;
require('mocha');

const bodyGen = require('../src/bodyGen');

/*
Stage 2
when generating location data
  it should generate an x y or z position between the min and max
  it should contain the index of the next closest based on x, y, and z



STAGE Future
-point seeding (map seeding -> store the seed and regen later)
-map chunking (pretty sure this has to be 3d)
*/

describe('mapper', () => {
  const config = {
    size: 4,
    min: 235,
    max: 849
  };

  const axes = ['x', 'y', 'z'];

  it('should should create an array of a desired size', () => {
    const results = bodyGen.createMap(config);
    expect(results.length).to.equal(config.size);
  })

  describe('location data', () => {
    it('should not repeat xyz positions', () => {
      const [first, second, third, ...theRest] = bodyGen.createMap(config);
      expect(first).to.not.eql(second);
      expect(first).to.not.eql(third);
      expect(second).to.not.eql(third);
    })

    axes.forEach(axis => {
      describe(axis, () => {
        const [results, ...theRest] = bodyGen.createMap(config);
        it(`should have an ${axis} position as an integer`, () => {
          // const [results, ...theRest] = bodyGen.createMap();
          expect(results[axis]).to.satisfy(Number.isInteger);
        });
        it(`should create a position where ${axis} is greater than max`, () => {
          const testMin = config.min -1;
          // const [results, ...theRest] = bodyGen.createMap(config);
          expect(results[axis]).to.be.greaterThan(testMin);
        })
        it(`should create a position where ${axis} is less than max`, () => {
          expect(results[axis]).to.be.lessThan(config.max);
        })
      })
    })
  })

  xdescribe('data links', () => {
    const defaultSet = {
      x: 50,
      y: 50,
      z: 50,
    };
    const validLinks = [{
      ...defaultSet
    },
    { ...defaultSet,
      x: 51
    },
    { ...defaultSet,
      y: 60
    },
    { ...defaultSet,
      z: 75
    },
  ]

  })
})