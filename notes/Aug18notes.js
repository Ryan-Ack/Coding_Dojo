/*
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  Bonus (alumni interview):
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const sortedNums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const sortedNums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const sortedNums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

// bonus, how many times does the search num appear?
const sortedNums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
const expected4 = 4

function binarySearch(sortedNums, searchNum) {
  var left = 0; //index 0?
  var right = sortedNums.length;
  var halfway = Math.floor(sortedNums.length / 2);
  console.log(halfway)
  while (left <= right) {
    if (searchNum == sortedNums[halfway]) {

      return true;
    }
    else if (searchNum > sortedNums[halfway]) {
      left = sortedNums.length / 2 + 1;
    }
    else {
      right = sortedNums.length / 2 - 1;
    }
  }
  return false;
}
//Math.round () - this method rounds a number to the nearest integer
//Math.floor () - this method rounds a number downward to the nearest integer. 
//Math.ceil() - this method rounds a number upward to its nearest integer.

console.log(binarySearch(sortedNums1, searchNum1));
// ------------------------------------------------------------------------ Answer below ------------------------------------

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
const expected4 = 4

function binarySearch(sortedNums, searchNum) {
  let left = 0
  let right = sortedNums.length - 1
  while (left <= right) {
    let mid = Math.floor(right + left / 2)

    if (sortedNums[mid] === searchNum) {
      return true
    }

    if (searchNum < sortedNums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))
console.log(binarySearch(nums4, searchNum4))




// ------------------------------------------------------extra


// works for count with forloop
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9]
const searchNum4 = 2
function binarySearch(sortedNums, searchNum) {
  count = 0

  for (var i = 0; i < sortedNums.length; i++) {
    if (searchNum == sortedNums[i]) {
      count++
    }
  }
  return count
}
console.log(binarySearch(nums4, searchNum4))















// ----------------------------------------------------------- Login and Reg / / / Bcrypt -------------------------------

/*
what is encryption?
  reversible - decrypt using  akey

What is hashing?
  Password scramlbing = my password => CiFJ2wnFIouNFLIK28703sz

Salt:
  add some random characters at the end, to add to the HASH

How should we store users passwords?
  store hashed password plus salt in db with user.

Techniques are there to access a password?
  brute force---  using a rainbow table
  man in the middle
  social engineering ------------biggest issue.


What do we need for login and registration application?
  -login form
  -registration form
  -success page
  -alias
  - email
  -password
  -confirm password
  -unique id -- > session
  -validation




cookie cutter. make project until at 10:53

-------------------------------------afternoon----------------------------

Validation by year. request.post.get..

int(post_data['release_date]).

2020-08-13 > > YYYY-MM-DD
split.(-)
['2020','08','13']


#datetime
models   >>>> from datetime import datetime
datetime.now()




*/
