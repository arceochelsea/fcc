function chunkArrayInGroups (arr, size) {
    const chunkArray = []; // nested arrays will be stored here
    let tempArray = [...arr]; // spread operator; go one at a time, iterate through them! exact replica of arr

    for (let i = 0; i < arr.length / size; i++) {
        chunkArray.push(tempArray.splice(0, size));
       // console.log(tempArray);
    }
    console.log(chunkArray);
    //console.log(`chunkArray: ${chunkArray}`);
}

chunkArrayInGroups([7, 3, 11, 21, 9], 2);




