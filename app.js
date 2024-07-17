// // print hello world 5 times

// for(var i = 1; i <= 5; i++){
//     document.write("Hello world <br>")
// }


// // print counting 1 to 10

// for(var i = 0; i <= 10; i++){
//     document.write(i + "<br>")
// }

// //Write a program to print multiplication table of any number

// //using for loop. Table number & length should be taken as an
// //input from user.

// var num  = +prompt("Enter number you want to print table ")
// var userInp = +prompt("enter length of multiplication  ")

// for(var i = 1; i <= userInp; i++){
//         document.write(i + " x "+ num + " = " + i*num + "<br>")
//      }


// //You have an array Write each element on new line with the help of for loop.

// A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

// for(var i = 0; i <= A.length -1 ; i++){
//     document.write(A[i] ,"<br>")
// }




// // Write a program to print items of the following array using for
// //loop:

// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0; i <= fruits.length -1 ; i++){
//        document.write(fruits[i] ,"<br>")
// } 

// document.write("Element at index 0 is "+ fruits[0] + "<br>")
// document.write("Element at index 1 is "+ fruits[1]  + "<br>")
// document.write("Element at index 2 is "+ fruits[2]  + "<br>")
// document.write("Element at index 3 is "+ fruits[3]  + "<br>")
// document.write("Element at index 4 is "+ fruits[4]  + "<br>")



//Generate the following series in your browser. See example output.

// //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15


// for(var i = 0; i <= 10; i++){
//         document.write(i + " ")
//      }


// //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for(var i = 10; i >= 0; i--){
//     document.write(i + " ")
//  }


// //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for(var i = 0; i <= 20; i+=2){
//         document.write(i + " ")
//      }


// //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// for(var i = 1; i <= 20; i+=2){
//         document.write(i + " ")
//      }



// //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// for(var i = 2; i <= 20; i+=2){
//         document.write(i + "k ,")
//      }



// // check backers item

// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInp = prompt("Enter name")

// for(var i = 0; i <= A.length; i++){
//         if(userInp ==  A[i]){
//                 document.write("available")
//         }
// }


// //Write a program to identify the largest number in the given
// //array.

// Arr = [24, 53, 78, 91, 12]
// var largest = Arr[0]

// for(var i=0; i < Arr.length ; i++){
//         if( Arr[i] > largest){
//                 largest = Arr[i]
//         }
// }
// document.write(largest)



// // Write a program to identify the Smalest number in the given
// // array.

// Arr = [24, 53, 78, 91, 12]
// var Smalest = Arr[0]

// for(var i=0; i < Arr.length ; i++){
//         if( Arr[i] < Smalest){
//                 Smalest = Arr[i]
//         }
// }
// document.write(Smalest)


//You have given the following arrays:

// var students = ["Ali", "Sami", "Taha", "Inam"]

// var scores = [58, 73, 89, 90];
// document.write(students[0]+"<br>")
// document.write(students[1]+"<br>")



// // 



// document.write(
//         +"<table border = '1px'>"+
//       +"<tr>"+
//                +"<th>"+"Student"+"</th>"+
//               + "<th>"+"Score"+"</th>"+
//          +"</tr>"+

//         +"<tr>"+
//                 + "<td>"+students[0]+"</td>"+ 
//                  "<td>"+scores[0]+"</td>"+ 
//         +"</tr>"+

//          +"<tr>"+
//                  +"<td>"+students[1]+"</td>"+
//                  +"<td>"+scores[1]+"</td>"+ 
                 
//         +"</tr>"+

//          +"<tr>"+
//                  +"<td>"+students[0]+"</td>"+
//                  "<td>"+scores[2]+"</td>"+ 
//          +"</tr>"+
//          +"<tr>"+
//                  +"<td>"+students[0]+"</td>"+
//                  "<td>"+scores[3]+"</td>"+ 
//          +"</tr>"+

//          +"</table>")



// for(var i=0; i<=6; i++){
//         for(var j=0; j<=i ; j++){
//                 document.write("* ")
//         }
//         document.write("* <br> ")
// }





