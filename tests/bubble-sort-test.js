import { assert, expect } from 'chai';
import bubbleSort from '../lib/bubble-sort'


describe("Bubble Sort Testing", function(){
  context("It should sort numerically from lowest to highest", function(){
    it("should be an array", function() {
      var unsorted = [4,3,5,1,2]
      var sorted   = [1,2,3,4,5]

      assert.deepEqual(bubbleSort(unsorted), sorted)
    })
  })
})
