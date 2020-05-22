function titleCase(str) {
    let array = str.toLowerCase().split(' ');
    let newSentence = '';

    for (let i = 0; i < array.length; i++) {
        newSentence += array[i][0].toUpperCase() + array[i].substr(1) + ' ';
        }
        str = newSentence;
        return str;
    }
  
  console.log(titleCase("I'm a little tea pot"));