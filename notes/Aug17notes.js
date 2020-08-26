/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3]
const expected1 = 2

const nums2 = [9, 9]
const expected2 = -1

const nums3 = [1, 2, 3, 0, 4, 2]
const expected3 = 3

const nums4 = [3, 2, 3]
const expected4 = 1

//Write two for loops?
//one iterating from the front while the other iterates from the back
//sum each loop as it goes through
//compare the sums at the end of each iteration
//if the sums equal eachother, check what is in between?????????????  ?




function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1
    }
    var x = nums[0]
    var left_sum = 0
    var total_sum = 0
    for (var i = 0; i < nums.length; i++) {
        sumFront += nums[i]
    }
    for
}


//loop through the array, at each index, sum all the numbers on either side of the index and compare them

function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1
    }



    // if sumFront < sumBack, forloop from front,
    for (var i = 0; i < nums.length; i++) {
        sumFront += nums[i]
    }


    // else if sumBack < sumFront, forloop from back,
    for (var j = nums.length - 1; j <= nums.length; j--) {
        sumBack += nums[j]
    }


    if sumFront == sumBack{
        return i
    }

}


function balanceIndex(nums) {
    var balance = -1;
    var leftSum = 0;
    var rightSum = 0;
    if (nums.length < 3) return balance
    for (var i = 0; i < nums.length / 2; i++) {
        leftSum += nums[i]
        if (leftSum == rightSum && balance != i) {
            balance = nums.length - 1 - i;
        }
        rightSum += nums[nums.length - 1 - i]
        if (leftSum == rightSum && balance != nums.length - i - 1) {
            balance = i
        }

    }
    //console.log(leftSum);
    //console.log(rightSum);
    return balance;
}
const nums1 = [7, 3, 0, 10]

// const nums1 = [7, 3, 1, 2, 1, 0, 14]

console.log(balanceIndex(nums1))









/* ******************************************************************************** */

/*
  Balance Point

  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

const nums1 = [1, 2, 3, 4, 10]
const expected1 = true
// Explanation: between indices 3 & 4


const nums2 = [1, 2, 4, 2, 1]
const expected2 = false

function balancePoint(nums) {
    sumFront = arr[0]
    sumBack = arr[arr.length - 1]

    // if sumFront < sumBack, forloop from front,
    for (var i = 0; i < nums.length; i++) {
        sumFront += nums[i]
    }

    // else if sumBack < sumFront, forloop from back,
    for (var j = nums.length - 1; j <= nums.length; j--) {
        sumBack += nums[j]
    }



}











// ---------------------------------------------------------------------- Aug 17th, Validations.


/*
4 views.
adding validations to record store.
done through models manager.

entering criteria twice, checking to see if they are exactly equal to each other.

def basic_validator(self, postData):


views.py

if statements.
match validator with inputfield name.
capturing errors from entire post.
return errors.

capture errors in views.py, if there are errors, using
messages.error(request, value)
return redirect('/blog/edit/' +id)











*/
