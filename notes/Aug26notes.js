/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

const testCases = [
    { arguments: [nums1, searchNum1], expected: expected1 },
    { arguments: [nums2, searchNum2], expected: expected2 },
    { arguments: [nums3, searchNum3], expected: expected3 },
]
// var arr = []
// add params if needed for recursion
function binarySearch(sortedNums, searchNum) {
    //find the mid point. compare it against search num. if greater than, use second half of array. if less than, use first half of array.
    var midpoint = Math.floor(sortedNums.length / 2)
    if (sortedNums.length == 0) {
        return false
    }
    if (sortedNums[midpoint] == searchNum) {
        return true;
    }
    //if sortedNums.length === 0 return false.
    //look at right index, return the right half of the arr???  (midpoint+1 to arr.length)
    //return sortedNums.slice(sortednums.length/2) or (midpoint??)
    else if (sortedNums[midpoint] < searchNum) {
        var sortedNumsHalf = sortedNums.slice(midpoint + 1, sortedNums.length)
        console.log(sortedNumsHalf)
        return binarySearch(sortedNumsHalf, searchNum);
    }
    //look at left index, return the left half of the arr  (0 to midpoint)
    else {
        var sortedNumsHalf = sortedNums.slice(0, midpoint)
        console.log(sortedNumsHalf)
        return binarySearch(sortedNumsHalf, searchNum)
    }

}
//if sortedNumsHalf.length < 2 and searchNum is still not in sortedNumsHalf ----> return false
//if sortedNumsHalf.length = 1 and sortedNumsHalf[0] != searchNum
console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))





/* ******************************************************************************** */

/*
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc"
const expected1 = "cba"

const str2 = ""
const expected2 = ""

const str3 = "asdfghjkl"
const expected3 = "lkjhgfdsa"

function reverseStr(str) {
    //base case
    if (str.length <= 1) return str
    //forward movement
    var slicedString = str.slice(0, str.length - 1)
    var lastLetter = str[str.length - 1]
    return lastLetter + reverseStr(slicedString)
}
console.log(reverStr(str1))
console.log(reverStr(str2))
console.log(reverStr(str3))