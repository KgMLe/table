//Abdul's exercise

// let dayMonth = 23
// let day;


// switch (dayMonth){
// case 1:
//     day = 'Monday';
//     break;
// case 2:
//     day = 'Tuesday';
//     break;
// case 3:
//     day = 'Wednesday';
//     break;

// case 4:
//     day = 'Thursday';
//     break;

// case 5:
//     day = 'Friday';
//     break;

// case 6:
//     day = 'Saturday';
//     break;
// case 7:
//     day = 'Sunday';
//     break;
// case 8:
//     day = 'Monday';
//     break;
// case 9:
//     day = 'Tuesday';
//     break;
// case 10:
//     day = 'Wednesday';
//     break;
// case 11:
//     day = 'Thursday';
//     break;
// case 12:
//     day = 'Friday';
//     break;
// case 13:
//     day = 'Saturday';
//     break;
// case 14:
//     day = 'Sunday';
//     break;
// case 15:
//     day = 'Monday';
//     break;
// case 16:
//     day = 'Tuesday';
//     break;
// case 17:
//     day = 'Wednesday';
//     break;
// case 18:
//     day = 'Thursday';
//     break;
// case 19:
//     day = 'Friday';
//     break;
// case 20:
//     day = 'Saturday';
//     break;
// case 21:
//     day = 'Sunday';
//     break;
// case 22:
//     day = 'Monday';
//     break;
// case 23:
//     day = 'Tuesday';
//     break;
// case 24:
//     day = 'Wednesday';
//     break;
// case 25:
//     day = 'Thursday';
//     break;
// case 26:
//     day = 'Friday';
//     break;
// case 27:
//     day = 'Saturday';
//     break;
// case 28:
//     day = 'Sunday';
//     break;
// case 29:
//     day = 'Monday';
//     break;
// case 30:
//     day = 'Tuesday'
//     break;
//     case 31:
//     day = 'Wednesday';
//     break;    

// default:
//     day = "Invalid day";
// }

// // console.log(day);
// document.getElementById("demo").innerHTML = 'On the 23rd it was a ' + day

//Jamie's exercise

let products = [
    {id: 1,
     name: "Warrior of Light",
     price:"R 200",
     img: 'https://www.booksplus.pk/wp-content/uploads/2018/12/21051-Manual-of-the-Warrior-of-Light-Paulo-Coelho.png'
},
{id: 1,
    name: "The Alcheimist",
    price: "R 300",
    img:  'https://www.thequillmagazine.com/wp-content/uploads/2020/02/the-alchemist.jpg'
},
{id: 1,
    name: "Manuscript Found in Accra",
    price: "R 400",
    img:  'https://m.media-amazon.com/images/I/61ElgWMoz1L.jpg'
}
]

let book = document.querySelector ('.products')
products.forEach((read )=> {
book.innerHTML += `
<tr>
<td>${read.name}</td>
<td>${read.price}</td>
<td><img src="${read.img}"></td>
<td> <button>Add</button> </td>
<td> <button>Delete</button> </td>
</tr>`
    
});