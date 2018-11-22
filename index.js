var katzDeliLine = [];

//Question 1 

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return 'Welcome, '+name+'. You are number '+ katzDeliLine.length +' in line.'; 
}

// Question 2 

function nowServing(katzDeliLine){
  
  
}


/*
2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
*/