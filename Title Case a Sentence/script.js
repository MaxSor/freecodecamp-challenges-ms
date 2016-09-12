
console.log("Hi!");
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  console.log(str);
  for (var i = 0; i < str.length; i++) {
  	
   console.log(str[i][i]);
  }
  return str;
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");