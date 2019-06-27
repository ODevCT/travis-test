import * as chai from 'chai'
import { add } from './number-add'

const { expect } = chai

describe('number add', () => {
  it('1 + 1 should be 2', done => {
    expect(add(1, 1)).to.equal(2)
    done()
  })

  it('1 + 2 should be 3', done => {
    expect(add(1, 2)).to.equal(3)
    done()
  })

})
