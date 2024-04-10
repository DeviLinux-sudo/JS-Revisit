// // accessing the document via javascript


// //Browser Console tests

// //accesing elemnt by id
// document.getElementById('title')
// //to access the id of the element with an Id
// document.getElementById('title').id
// //to access the class of the lement with an Id
// document.getElementById('title').class
// //to access the className of the element with an Id
// document.getElementById('title').className
// // get attribute of the element with an Id
// document.getElementById('title').getAttribute('class')
// //set attributes of thelement with an Id
// document.getElementById('title').setAttribute('class','test heading')

// //Storing a DOM in a variable

// const title = document.getElementById('title')

// // Can use variables to make changes to the document 

// title.style.backgroundColor = 'green'

// //to access text context

// title.textContent // 'DOM learning in JS' //doesnt supports html tags
// title.innerHTML // 'DOM learning in JS' // supports html tags 
// title.innerText // 'DOM learning in JS' //doesnt support html tags



// //query selector

// document.querySelector('h1') // returns first h1 tag 
// document.querySelector('#title') //returns the whole html element associated with this id 
// document.querySelector('.heading') //returns the html element associated with this heading
// document.querySelector('p:firstChild') // this kinda of selection can also be done with query selector

// //list selection

// document.querySelectorAll('li')// returns nodeListe ; which very different from Arrays , it doesnt have reqd property to deal with 
// const tempList = document.querySelectorAll('li') 
// tempList.style.color = 'green' // doesnt work on nodelist , cause it was selected using queryselectorAll
// tempList[0].style.color = 'green' // works

// // to get all the elements in the NodeList 
// tempList.forEach(function(l) {
//     l.style.backgroundColor = 'green'
// })

// //accessing element by className

// document.getElementsByClassName('heading') //returns HTML Collection
// //forEach can be implemented im HTML Coolection as well

// const tempClasslist = document.getElementsByClassName('heading')
// // Changing HTML Collection List to Arrays 
// Array.from(tempClassList)
// const myConvertedArray = Array.from(tempClassList) // returns array now


