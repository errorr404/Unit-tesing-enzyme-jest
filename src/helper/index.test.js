import {max_number} from './index'

describe('max_number',()=>{
  describe('given an emptyarray',()=>{
    it('return 0',()=>{
      expect(max_number([])).toEqual(0)
    })
  })

  describe('given an array of numbers',()=>{
    it('return the max number',()=>{
      expect(max_number([1,2,3])).toEqual(3)
    })
  })
})
