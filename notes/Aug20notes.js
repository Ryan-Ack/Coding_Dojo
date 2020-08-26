/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// return an object with the change.
// quarter = 25
// dime = 10
// nickel = 5
// penny = 1


// const cents1 = 25
// const expected1 = { quarter: 1 }

// const cents2 = 50
// const expected2 = { quarter: 2 }

// const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

// const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange(cents) {
    var penny = 1
    var nickel = 5
    var dime = 10
    var quarter = 25
    var dollar = 100
    // var change needed = x
    //dictionary storing values of each coin.
    var coinPurse = {
        // penny: 1,
        // nickel: 5,
        // dime: 10,
        // quarter:  25,
        // dollar:  100
        // push the required change into "coinpurse" dictionary.\
        // all values start as 0, adding up to total change required
    }
    //add keys and values from coinPurse to changeReq as needed
    //

    if ((cents / quarter) % 25 > 1) {
    }

    if 99 / 25 is divisible by 25(WITH a remainder), then we continue.
    we will push(3 quarters into the)



    //passing remainders.
    if (99 / quarter % 25) (remainder of quarter)
    if else ((remainder of quarter)% 10) (remainder of dime)
    if else ((remainder of dime)% 5) (remainder of nickel)
    if else ((remainder of nickel)% 1) (remainder of penny)
    // need to set a variable for cents.
    //something with a remainder?
    // 

    forloop
    cents - quarter
    adding one to the quarter until you cant
    nested forloop:
    centsafterquarter - dime
    add one to the dimes until you cant
    nested forloop:
    centsafterdime - nickel
    add one to the nickel until you cant
    nested forloop:
    centsafternickel - penny
    add one to the penny until you cant


    console.log(coinPurse)

}
console.log(coinPurse.dime)
    
}

    }
remainderafterquarter / dime) = remainderafterdime{
    remainderafterdime / nickel = remainderafternickel
    remainderafternickel / penny = remainderafterpenny //should be no remainder here
}

forloop
    (cents - quarter)
adding one to the quarter until you cant
// push how many loops (adding it to the quarter dictionary count)
nested forloop:
(centsafterquarter - dime)
add one to the dimes until you cant
nested forloop:
(centsafterdime - nickel)
add one to the nickel until you cant
nested forloop:
(centsafternickel - penny)
add one to the penny until you cant


var coinPurse = [dollar, quarter, dime, nickel, penny]
for (var i = 0; i < coinPurse.length; i++) {
    if (cents - coinPurse[i] > 0) {
        cents = cents - coinPurse[i]
    } else
}





//cents = 99
if ((99 / 25) = varEx && varEx > 1)
    3. ??

        5 % 2 == 1  5 / 2 > (2 + 2 + 1) == remainder 1

if



  //passing remainders.
    if (99 / quarter % 25) (remainder of quarter)
if else ((remainder of quarter)% 10) (remainder of dime)
if else ((remainder of dime)% 5) (remainder of nickel)
if else ((remainder of nickel)% 1) (remainder of penny)
// need to set a variable for cents.
//something with a remainder?
// 



console.log(coinPurse)
    
}
console.log(coinPurse.dime)


































/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const nums1 = [3, 0, 1];
// const expected1 = 2;

// const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing

//make a dictionary with each of them.


/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

// const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

// const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

function missingValue(nums) { }