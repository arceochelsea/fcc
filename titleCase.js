// function titleCase(str) {
//     let newStr = str.toLowerCase().split("");
//     for (i = 0; i < newStr.length; i++) {
//       finalStr = (str.replace(newStr[i][0].toUpperCase()));
//       console.log(finalStr);
//   }
//   }
//   titleCase("I'm a little tea pot");

  function titleCase(str) {
    str = str.toLowerCase();
    let newWord = '';

    for (let i = 0; i < str.length; i++) { // "i'm A"
        newWord = newWord + str[i]; //"i'm A"
        console.log(newWord);

        //get the index of the first letter of each word and then upper case it
        if (str[i] == ' ') {
          newWord = newWord + str[i+1].toUpperCase(); // "i'm A"
          i++;
          }
        }
        console.log(newWord);
        return str;
    }
  
  titleCase("I'm a little tea pot");