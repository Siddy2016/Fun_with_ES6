EXPLANATION:-


1)The function converted with ES6 features are in the file named as below:-

i)checkLogin.js

ii)bubbleSort.js

iii)index.html(html file for checkLogin.js & bubbleSort)

2)ProblemStatement2.js file consists of the function using JSON and ES6 features.

i)ProblemStatement2.html file-html file for ProblemStatemnet2.js file.

ii)The input to this function are given manually so please give your input by opening ProblemStatement.js file and giving your input as a parameter to these functions,the output are displayed in the console.


// FIRST function that takes season number and episode  number as input and gives all the information about that particular episode as output

i)episodeInfo(4,2)->In this function ,stored  all the json episodes information in episodes variable and iterate across all data with for loop. inside for loop there is if condition that checks for the valid season number and the episode number ,if its true then episode information is displayed,if not then flag is false ,so prints the wrong season number or episode number.

//SECOND function that can take any number of episode ids as input and returns all the information about those episodes

ii)AnyEpisodeInfo(2,8,80)->In this function any number of episode ids are passed as argument and this argument are taken by use of REST parameter in function definition.

All the episode ids are stored in epID array variable.

Now using for of loop each ids are iterated in loop followed by nested for of loop which iterates all the episodes data .

So, inside loop by using if condition the episode ids is compared with episodes data id, if true then those episode ids information are displayed,if not flag is false and prints error measage.


//THIRD  function to search episode by its name

iii)searchEpisode("The Big Bang Theory")->In this function the episode name is given as input and respective episode number is displayed as output.

So here first of all ,all the data of episodes are stored in episodes variable. 

Now using for of loop each episode details are iterated and inside for loop , if condition is used to check given input name is equal to the episode name present in json file , if true then print the respective episode id if false then print error message. 
