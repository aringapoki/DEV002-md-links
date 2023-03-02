const { mdLinks } = require('../index.js');


describe('mdLinks', () => {
 
  it('should return Promise', ()=> {
    expect(mdLinks()).toBe(Promise)
  })

});
