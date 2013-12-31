var expect = chai.expect;

describe('test by mocha', function(){
  it('my friend is 27 years old', function(){
  	var friend = new Friend();
    expect(friend.age).to.equal(27);
  });
});

describe('test by mocha', function(){
  it('my friend is 27 years old', function(){
  	var friend = new Friend();
    expect(friend.age).to.equal(28);
  });
});