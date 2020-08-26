/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3]
const separator1 = ", "
const expected1 = "1, 2, 3"

const arr2 = [1, 2, 3]
const separator2 = "-"
const expected2 = "1-2-3"

const arr3 = [1, 2, 3]
const separator3 = " - "
const expected3 = "1 - 2 - 3"

const arr4 = [1]
const separator4 = ", "
const expected4 = "1"

////arr5 logs "undefined, not '' "
const arr5 = []
const separator5 = ", "
const expected5 = ""
//new string to place the expected1 result.
//for loop to go through array and pull values.
//for loop create myStr = myStr + separator
//if it is arr.length-1, just do mystr= myStr[i] + "."


function join(arr, separator) {
    var newStr = "";
    //pulling from array.
    for (var i = 0; i < arr.length - 1; i++) {
        //push into string.
        newStr = newStr + arr[i] + separator;
        //this  if statement currently makes it log "1, 3.2, 3.3, 3."
        // if (arr[i]= arr[arr.length-1]){
        //     newStr =arr[i] + ".";
        // }
    }
    return newStr + arr[i];
}

console.log(join(arr1, separator1));
console.log(join(arr2, separator2));
console.log(join(arr3, separator3));
console.log(join(arr4, separator4));
console.log(join(arr5, separator5));
// array > string > string
// single item = no separators.
/* ******************************************************************************** */

/*
  Book Index

  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums6 = [1, 13, 14, 15, 37, 38, 70]
const expected6 = "1, 13-15, 37-38, 70"

const nums7 = [1, 2, 3, 15, 55, 56, 57, 70]
const expected7 = "1-3, 15, 55-57, 70"


function bookIndex(arr) {
    var myStr = "";
    var firstnum = arr[0];
    var lastnum;
    for (var i = 0; i < arr.length; i++) {
        // if it is not consecutive, (top end of range becomes current index)
        if (!(arr[i] + 1 == arr[i + 1])) {
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if (i == arr.length - 1) {
                // Checks for cases where "-" is not needed. i.e. [5,10,12] -> logs "5, 10, 12"
                if (firstnum == lastnum) {
                    myStr += firstnum;
                }
                // Else, "-" added to consecutive set of numbers
                else {
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            // separates the strings, rather than first index/last index.
            else {
                // Checks if the index is single, non-consecutive.
                if (firstnum == lastnum) {
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                // Else, "-" added to consecutive set of numbers
                else {
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }

        }
    }
    return myStr
}

console.log(bookIndex(nums6));
console.log(bookIndex(nums7));



// --------------------------------------------------------  Lecture ---------------------------------
/* one to Many
a way to set up a relationship between two
foreign key - pulling from another model.  (key from another table)..
-----where does it go? ---------  (on the many model)
author = models.ForeignKey(Author, related_name="books", on_delete = models.CASCADE)

copy environment into the app folder??


#TODO
add a form to add a supplier
add a dropdown for supplier.
add a new supplier model
add the relationship to item

go to index page within app > templates > index.

new form (also, method ="post")
    <form action="/supplier/create" method ="post">
    {%csrf_token%}
    <p><label for="supplier">< input type ="text" name="supplier" /></label><p>
    </form>


    add new path in urls.py
            ("/supplier/create")

            def (views)
            def add_supplier(request):
                print(request.POST)
                    #TODO
                return redirect('/')


------------------------ models.py in app settings (will have to update migrations)

class Supplier(models.Model):
    name = models.CharField(max_length=55)
    created_at = models.DateTimeField(auto_now_add=True)

making a foreign key
vendor = models. ForeignKey(supplier, related_name="items", on_delete=models.CASCADE)

//20 minutes here???

sending the "{{supplier.id}}"

needs the vendor id /inventory/create
 --- has to

must be a supplier "istance"
    query for a single item within views.\
        "supplier.object.get(id=request.POST[supplier]).name"

add it on the table in order to see it.<td>Vendor.name</td>

must


---------------
reverse lookup.  by vendor???

Supplier.objects.get(id=2).items.all()[0].item_name
Item.objects.get(id=4).vendor.name






























// ------- Morley---------
//     /**
//      * @param {String} str
//      * @return {String} with the original "compressed"
//      * if the "compressed" version IS NOT shorter,
//      * return the original
//      */

//     function encode(str) {
//         // your code here
//         //create a counter that stores a variable of how many times a consecutive


//     }

// console.log(encode('aabbbbbb')); // should log 'a2b6'
// console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
// console.log(encode('abbbaa')); // should log 'abbbaa'
// console.log(encode('abc')); // should log 'abc'









// /**
//  * @param {String} str
//  * @return {String} with the original "expanded"
//  * 
//  * parseInt('a') returns NaN
//  * parseInt('5') returns 5
//  * isNaN('c') returns true
//  * isNaN(5) returns false
//  */



// function decode(str) {
//     // your code here
// }

// console.log(decode('a2b6')); // should log 'aabbbbbb'
// console.log(decode('a1b10')); // should log 'abbbbbbbbbb'



