/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes"
const strB1 = "eys"
const expected1 = true

const strA2 = "yes"
const strB2 = "eYs"
const expected2 = true

const strA3 = "no"
const strB3 = "noo"
const expected3 = false

const strA4 = "silent"
const strB4 = "listen"
const expected4 = true

function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false
    }
    var my_object1 = {}
    var my_object2 = {}
    //can loop through an objects keys and values.
    var s1lowered = s1.toLowerCase()
    var s2lowered = s2.toLowerCase()
    // for in loops will retrieve keys.  (for in loop will give the "index")
    // for of loops will retrieve the values. ()
    for (char of s1lowered) {
        console.log(character)
        if (my_object1.hasOwnProperty(character)) {
            my_object1[character]++
        }
        else {
            my_object1[character] = 1
        }
    }
    for (char of s2lowered) {
        console.log(character)
        if (my_object2.hasOwnProperty(character)) {
            my_object2[character]++
        }
        else {
            my_object2[character] = 1
        }
    }
    for (char in my_object1) {
        if (my_object1["char"] != my_object2["char"]) {
            return false
        }
        return true
    }
}






// function isAnagram(s1, s2) {
//     if (s1.length != s2.length) {
//         return false
//     }
//     var lowers1 = s1.toLowerCase()
//     var lowers2 = s2.toLowerCase()

//     var s1a = lowers1.split('').sort().join('')
//     var s2a = lowers2.split('').sort().join('')

//     if s1a == s2a {
//         return true
//     }
//     else { return false }
// }







/* ******************************************************************************** */

/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
]
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
]
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
]

const newInv2 = []
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }]
const expected2 = [{ name: "Peanut Butter", quantity: 20 }]

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }]
const currInv3 = []
const expected3 = [{ name: "Peanut Butter", quantity: 20 }]

function updateInventory(newInv, currInv) {
    console.log("newInv: ", newInv)
    console.log("currInv: ", currInv)


}

iterate through newInv5[i] and add that to the currentInv5[i]
if currInv5[i].hasOwnProperty() 

doesn't exist, push it into the inventory.

loop:
"name: " + newCurrInv[key]




console.log(updateInventory(newInv5, currInv5))
























/*

#RECORD STORE (from scratch)

//model
## Album (cds, records)

    -title
    -artists
    -tracks

## Atrtist

    -alias
    -albumns
    -tracks

## Track

    -name
    -artists
    -albums




every page is a form to add a type.






after inital setup. set up homepage.
navbar
<nav>
    <a href="/">home</a>
    <a href="/albums">Albums</a>
    <a href="/albums">Albums</a>
    <a href="/albums">Albums</a>
</nav>

go to urls and include the paths
path('albums', views.albums),
path('albums', views.albums),
path('albums', views.albums),

go to views and include defs
def index(request):
    return render(request, )



html is all working.
link navbars to all pages.

html table.
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Artists</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> purple rain</td>
            <td> prince </td>
            <td> stuff</td>
        <tr>
    </tbody>
</table>

copy this to all html files.

then go to form. under table
//create an album
<form action="/albums/create" method="post">
    {%csrf token%}

    // snip

    <p><label for ="title"><input type="text" name="title" /></p>
    p
    label for="artists"></label>
    select field name = "artists">
        options

    // snip

    <button type ="submit"> Submit</button>
    </form>

    <h2> add an artist to the album </h2>
    <form>  action="" method ="post" >

    <button type ="submit"> Submit</button>
    </form>

add actions pages to urls.
urlpatterns. >  views
#render routes > functions
 path url etc.

#redirect route > functions


in views.
def albums_create(request):
    print(request.POST)
    #create an album
    Album.objects.create()  >>> on top from .models import Album
    return redirect('/albums')


-----------------------------------------------------views.py
(we don't have an album yet! > create a model)


ClassArtist(models.Model):
    alias = model.CharField(max_length=255)
    #albums

    #TODO - don't have related_name "tracks"
    #tracks


    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Track(models.Model):
    title= models.CharField(max_length=255)

    #albums

    artsits = models.ManyToManyField("Artist", related_name="tracks")
    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
class Album(models.Model):
    title= models.CharField(max_length=255)
    artists = models.ManyToManyField("Artist", related_name="albums")
    tracks = models.ManyToManyField("Track", related_name="albums")
    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

     >>>>>>> need to define artist and class on line 245,246.
>>making manytomany fields "strings" all strings and no worries.

--------------------makemigrations   and migrate --------------

go back to views.

def albums_create(request)
    print(request.POST)
    Album.objects.Create(
        title=request.POST['title']
    )

    return redirect('/albums')


change .html templates to add information to table that isn't hardcoded.
    put table
        change to double {{}}
<tbody>
    {% for album in all_albums %}
    <tr>
        <td> {{album.title}} </td>
        <td>
        {% for artist in album.artists.all %}
            {{artist.alias}}
        {%endfor%}
        </td>
        <td> {{album.title}} </td>


where did we get all_albums??? >>>>>>>>>>>go to views.
    def albumns(request):
        context={
            "all_albums": Album.objects.all()
        }

        /////////////add ,context to return line.

now we need artists template.
 copy form from index. to create an artist.
form action="/artists/create" method="post"


copy this redirect route into .urls.
copy the albumns views into the def. >>>>>>>>>> add second row, "from models import *"



{% for artist in artists%}
??Who is rendering this???  >> Views.artists
        include context{
            "all_artists": Artist.objects.all()
        }
    make sure to add ",context" to return line!!!!!!!!!!!!


to change dropdowns.
        def albums(request):
        add context below
        add "all_artists":
        add "all_tracks": Track.objects.all()

        go to albums.html
put this in "pick an artist"

{%for artist in all_artists %}
        <option> value="{{arist.id}}">{{artist.alias}}</option>
{% endfor%}

drop the above under "pick an album"

switch to urls. path('albums/add_artists', views.albums_add_artists),
go to views and create a new def function.

def albums_add_artists(request):
    print(request.POST)
    #How do we add an artist to an album?
    #who is the artist? >>>>>>>must retrieve from db
    artist_id = request.POST['artist']
    artist_to_add = Artist.objects.get(id=artist_id)
    #What is the album?
    album_id = request.POST['album']
    album_to_add = Album.objects.get(id=object_id)

    print(artist_to_add,album_to_add)
    album_to_add.artists.add(artist_to_add)
    or
    album_to_add.artists.add(artist_to_add)

    return redirect('/albums')

        album_id.objects.add()








a function with a redirect will ****NOT**** need a context







----------------------Many to many relationships.----------------------














*/




