const{add, sub} = require('../src/app')
const expect = require('chai').expect

describe('suit 1', ()=>{
    it('add(2,3) should retuen 5',()=>{
        expect(add(2,3)).to.be.equal(5);
    })

    it('add(2,3) should retuen 8',()=>{
        expect(sub(10,2)).to.be.equal(8);
    })
})