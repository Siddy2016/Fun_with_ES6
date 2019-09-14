# Fun_with_ES6

Topic-Fun with ES6

Statement-

Problem Statement -
1) Convert the following two functions written in simple Javascript to ES6. Try and
use as many features of ES6 as you can.
i---

var checkLogin = function (email, password, allUsers)
{
  
  var isUserFound = false 
  
  var passwordCorrect = false 
 
  for (currentUser in allUsers) 
  { 
   console. log (currentUser) 
  
   if (allUsers [currentUser] [ 'email'] == email)
    { 
  
      if (allUsers [currentUser] [ 'password'] == password)
  
      isUserFound = true 
  
      passwordCorrect = true 
  
      break 
    } 
   else { 
  
          isUserFound = true 
  
          passwordCorrect = false 
  
          break 
        } 
    else { 
            isUserFound = false 
            
            // end of for loop 
      
         if (isUserFound == true && passwordCorrect == true) 
          { 
  
            alert( 'You are logged in') 
  
          } 
         else  if (isUserFound == true && passwordCorrect == false)
  
               alert( 'You have provided incorrect password') 
  
        } else {

        alert( 'No user with this email found') 
       
       // end check login
       
 ii----
 
 function bubble_Sort (a) 
{
 var swapp; 
 var n=a.length-1; 
 var x=a;
  do{
     swapp = false; 
     for (var i=O; i < n; i++)
     {
      if(x[i]<x[i+1])
       {
         var temp = x[i]; 
         x[i] = x[i+1]; 
         x[i+1] = temp ;
         swapp  = true; 
       }

     } 
     n--;
}
while (swapp) ;
return x; 
}





2) Consider the following JSON dataset -
https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/we
b03/JSS1l2/bigbangtheory.json

This dataset contains information about a popular TV show in america called Big
Bang Theory. 
Include this dataset in a JS file as a variable and then write the following
functions (using ES6 features as much as possible) -
● Write a function that takes Season number and episode number as input
and gives all the information about that particular episode as output.
● Write a function that can take any number of episode ids as input and
returns all the information about those episodes.
● Write a function to search episode by its name.
