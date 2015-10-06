var expect = require('chai').expect;
var PumpkinPatch = require('../lib/pumpkin-patch');

describe("The pumpkin patch", function(){
  it("Should have name", function(){
    var farm = new PumpkinPatch('The Great Pumpkin Patch', 100);
    expect(farm.name).to.equal('The Great Pumpkin Patch');
  })

  it("Should report number of pumpkins", function(){
    var farm = new PumpkinPatch('The Great Pumpkin Patch', 100);
    expect(farm.pumpkinsLeft()).to.equal(100);
  })
})
