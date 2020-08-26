/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC"
const expected1 = "abcABC"

const str2 = "helloo"
const expected2 = "helo"

function stringDedupe(str) {
  //log into a object/dictionary
  //array
  var hasSeen = {}
  var newStr = ""
  //loop through strings
  for (var i = 0; i < str.length; i++) {
    console.log(str[i])
    //if we have seen before, do nothing
    //string includes or hasownproperty
    console.log(hasSeen.hasOwnProperty(character))

    //add new key to object>>>>
    hasSeen[character] = true
    newSTr += character
  }
  return newStr
}

console.log(stringDedupe(str2))


// -----------------other way------------------
function stringDedupe2(str) {
  var newStr = ""
  for (var i = 0; i < str.lenght; i++) {
    //  var character =str[i]
    //  console.log(character)
    if (!(newStr.includes(str[i]))) {
      newStr += str[i]
    }
  }
  console.log(newStr)
  return newStr
}
console.log(stringDedupe2(str2))









/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello"
const expected1 = "olleh"

const str2 = "hello world"
const expected2 = "olleh dlrow"

const str3 = "abc def ghi"
const expected3 = "cba fed ihg"

function reverseWords(str) {
  console.log(str)
  var newStr = ""
  var strArray = str.split(" ")
  console.log(strArray)
  //build the new string with this loop.
  for (var i = 0; i < strArray.length; i++) {
    var word = strArray[i];

    for (var j = word[i].length - 1; j >= 0; j--) {
      console.log(strArray[i][j])
      newStr += strArr[j]
    }
    newStr += " "
  }

  return newStr
}

reverseWords(str3)
























































----------------------------------notes-----------------------------
/* ORM
object relational mapper
//why use it??? saves time.
CRUD
creating reading updating and deleting commands

saving a database using a table system.
drawer with index card


building an app -----  consession stands---------

environment is already created.
showing the path bar.  --------
"call C:\Users\ryana\Desktop\dojo\python_stack\my_environments\djangopy3env\Scripts\activate"
---------------------activates environment ^^----------------------
without going through changing directories.

start project.  django-admin startproject "snack_project"
cd snack_project
  django-admin startapp "snack_app"

pip list
installed django. ensure.

project urls
path('', include('snack_app.urls'))

app urls



//
<form action ="/inventory/create" method ="post">
{% csrf_token %}
  <p><label for="item_name">Item Name<input type ="text" name="item_name"/></label></p>

  <button type="submit"> Add to Inventory! </button>

//after built, decide where you want to send form. (change action) > go to urls and add "/inventory/create" and change in views.

// Django ORM goals
CRUD
create
read
update
delete


creating models. -------------learning platform > django > models
from django.db import models
  >>>

  class Item(models.Model):
    item_name = models..CharField(max_length=55)
    description = models.CharField(max_length=55)
    size = models.CharField(max_length=20)
    quantitiy = models.IntegerField()
    price = models.DecimalField(mkax_digits=4, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    >>>>>>>>>>>>>snapshots of date/time field to see when a bug occurs.


    creating a model within models.py
      popcorn = Item.objects.create( item_name = 'Butter Popcorn', description = 'Butter overload', size = 'XL', quantitiy = 1, price = 19.99,
      )

importing models within python. ("python manage.py shell")

from snack_app.models import Item
(verify that it's in there.)

since changes happened in models.py  will need to migrate***************
shut off server, and restart it after migrating.

in terminal:  from snack_app.models import*
* pulls in everything from file.














*/










