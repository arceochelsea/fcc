// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

    function repeatStringNumTimes(str, num) {

      let newStr = '';
      
      while (num > 0) {
      newStr = newStr + str;
      num = num - 1;
      }
      return newStr;
      }      
      repeatStringNumTimes("*", 3)
    