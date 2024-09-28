////// Masala 41
// let books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read:false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "Otkir Xoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: 'Shayh Muhammad Sodiq Muhammad Yusuf',
//         read: true
//     },
//     {
//         title: "Islom taraqqiyoti",
//         author: 'Xasanxon Domla',
//         read: true,
//     }
// ]
// books.forEach((item) => {
//     if(item.read === true){
//         console.log(`${item.author} ning ${item.title} kitobi o'qilgan `);
//     }else{
//         console.log(`${item.author} ning ${item.title} kitobi hali o'qilmagan `);
//     }
// })

////// Masala 42
// let arr = ['xusan','xasan','otabek','umida','utkir']
// let result = {}
// for(let i = 0; i < arr.length; i++){
//     result[arr[i]] = arr[i].length
// }
// console.log(result);

////// Masala 43
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }
// let res = {}
// for(let i in obj){
//     res[i] = obj[i] * 3
// }
// console.log(res);

////// Masala 44
// function getLevel(n){
//     let res = []
//     for(let i = 1; i <= n; i++){
//         res.push(Math.pow(2,i))
//     }
//     return res
// }
// console.log(getLevel(5));

////// Masala 45
// let animalsARR = ['dog','cat','elephant','eagle','cat','dog']
// function animals(arr){
//     let res = {}
//     arr.forEach(item => {
//         if(res[item]){
//             res[item] += 1
//         }else{
//             res[item] = 1
//         }
//     });
//     return res
// }
// console.log(animals(animalsARR));

////// Masala 46
// let arr = [1, 2, 3, 4, 5];
// let res = [];
// for (let i = 1; i < arr.length; i++) {
//   res.push(Math.pow(arr[i], 2));
// }
// console.log(res);



////// Masala 47
// let arr = [1, -4, 12, 0, -3, 29, -150]
// let res = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= 0){
//         res += arr[i]
//     }
// }
// console.log(res);


////// Masala 48
// let str = 'Birlashgan Millatlar Tashkiloti'
// let res = str.split(' ').map(item => item[0]).join('')
// console.log(res);

////// Malasa 49
// let people = [
//     {name: 'John', age: 13 },
//     {name: 'Mark', age: 56 },
//     {name: 'Rachel', age: 45 },
//     {name: 'Nate', age: 67 },
//     {name: 'Jeniffer', age: 65 }
//   ]  
//   people.sort((a, b) => a.age - b.age);
//   let litWORD = people[0].age;  
//   let bigWORD = people[people.length - 1].age;  
//   let result = bigWORD - litWORD;
// console.log(result);
  
// function fn(name) {
//     let a = name.split('').join('').toLowerCase()
//     if(a[0] === 'r'){
//         console.log('start');
//     }else{
//         console.log('end');
//     }
// }  

// fn('ahmatjon')