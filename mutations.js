function mutation(arr) {
    let stringOne = arr[0].toLowerCase();
    let stringTwo = arr[1].toLowerCase();

    for (let i = 0; i < stringTwo.length; i++) {
        if (stringOne.indexOf(stringTwo[i]) < 0) {
            return false;
        } else {
            return true;
        }
    }
}
  
  let answer = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

  console.log(answer);
  
