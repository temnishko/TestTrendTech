const { rangeOfNumbers } = require('./index')
const assert = require('assert')

describe('testing rangeOfNumbers function', async () => {
  it('[1,2,3,4,5,6,7,8] -> "1-8"', async () => {
    const res = await rangeOfNumbers([1,2,3,4,5,6,7,8])
    assert.equal(res, '1-8')
  })
  it('[1,3,4,5,6,7,8] -> "1,3-8"', async () => {
    const res = await rangeOfNumbers([1,3,4,5,6,7,8])
    assert.equal(res, '1,3-8')
  })
  it('[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"', async () => {
    const res = await rangeOfNumbers([1,3,4,5,6,7,8,10,11,12])
    assert.equal(res, '1,3-8,10-12')
  })
  it('[1,2,3] -> "1-3"', async () => {
    const res = await rangeOfNumbers([1,2,3])
    assert.equal(res, '1-3')
  })
  it('[1,2] -> "1,2"', async () => {
    const res = await rangeOfNumbers([1,2])
    assert.equal(res, '1,2')
  })
  it('[1,2,4] -> "1,2,4"', async () => {
    const res = await rangeOfNumbers([1,2,4])
    assert.equal(res, '1,2,4')
  })
  it('[1,2,4,5,6] -> "1,2,4-6"', async () => {
    const res = await rangeOfNumbers([1,2,4,5,6])
    assert.equal(res, '1,2,4-6')
  })
  it('[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"', async () => {
    const res = await rangeOfNumbers([1,2,3,7,8,9,15,17,19,20,21])
    assert.equal(res, '1-3,7-9,15,17,19-21')
  })
  it('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002"', async () => {
    const res = await rangeOfNumbers([1,2,3,4,5,6,100,1091,1999,2000,2001,2002])
    assert.equal(res, '1-6,100,1091,1999-2002')
  })
  it('[1] -> "1"', async () => {
    const res = await rangeOfNumbers([1])
    assert.equal(res, '1')
  })
  it('[1,3,5,7,9,11] -> "1,3,5,7,9,11"', async () => {
    const res = await rangeOfNumbers([1,3,5,7,9,11])
    assert.equal(res, '1,3,5,7,9,11')
  })
})

