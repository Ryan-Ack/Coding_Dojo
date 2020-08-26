const str0 = "   hello world     "
// const expected0 = "hello world"

function trim(str) {
    var newStr = "";
    // for loop to go through initial string?
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] != " " || str[i - 1] != " " && str[i + 1] != " ") {
            newStr += str[i];
            console.log(newStr)
        }
    }
    return newStr
}
console.log(trim(str0))

// ---------------------------------------
const str0 = "   hello world     "
function trim(str) {
    var start = 0
    var end = str.length - 1
    var newStr = ""

    while (str[start] == " ") {
        start++;
    }
    while (str[end] == " ") {
        end--
    }
    for (i = start; i <= end; i++) {
        newStr += str[i]
    }
    return newStr
}
console.log(trim(str0))

// -----------------------------------------




/*
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5]
const expected1 = 6

const nums2 = [3, 5, 5]
const expected2 = 3

const nums3 = [3, 3, 5]
const expected3 = 5

const nums4 = [5]
const expected4 = 5

const nums5 = []
const expected5 = null

function firstUnique(nums) {
    const object = {};
    const result = [];
    arr.forEach(item => {
        if (item in object) {
            object[item] += 1
        }
        else {
            object[item] = 0;
        }
        for (item of arr) {
            if (object[item] == 0) {
                return item
            }
        }
    }
}
return result

console.log(firstUnique(nums1))












// -----------------------------------lecture many to many---------------------


/*
can first model "author" have many books?
can second model "books" have many authors?
if yes, many to many.  if no, one to many.

books = models.ManyToManyField(Book, related_name = "publishers")



























*/




