function titleCase(str) {
    let array = str.toLowerCase().split(' ');

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
        }
        str = array.join(' ');
        return str;
    }
  console.log(titleCase("I'm a little tea pot"));