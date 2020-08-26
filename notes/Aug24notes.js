//base case
//forward movement (a function that calls itself)

// (will not need forloop generally)

/*
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3]
const expected1 = 6

// add params if needed for recursion
function sumArr(nums, i = 0, sum = 0) {
    if (i < nums.length) {
        sum += nums[i]
        i++
        return sumArr(nums, i, sum)
    } else {
        return sum
    }
}

console.log(sumArr(nums1))



function sumArr(nums, numsStop = nums.length) {



    if (nums == numsStop) {
        return sum
    } else {
        sum = sum + nums[0]
        nums++
    }
    return numsStop + sumArr(nums - 1)
}
console.log(sumArr(nums1))


//forloop version
function sumArr(nums) {
    var sum = nums[0]
    for (var i = 1; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}
console.log(sumArr(nums1))


/* ******************************************************************************** */

/*
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer

*/
//similar to countdown, var sum = arr.length -1 
// sum+= (arr.length-2)


const num1 = 5
const expected1 = 15
// Explanation: (1+2+3+4+5)

const num2 = 2.5
const expected2 = 3
// Explanation: (1+2)

const num3 = -1
const expected3 = 0

function recursiveSigma(num, sum = 0) {
    if (num > 0) {
        sum += num
        num--
        console.log(sum)
        return recursiveSigma(num - 1, sum)
    } else {
        return sum
    }
}
console.log(recursiveSigma(num1))