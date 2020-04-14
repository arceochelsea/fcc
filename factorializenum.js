function factorialize(num) {
  
    let result = 1; 
    for (let i = 1; i <= num; i++) { 
      result *= i //result = result * i is also the same 
    }
    
      return result;
    }
    
    factorialize(5);


// Create a variable total, and set it equal to 1.
// Create a for loop with i equal to 1, running as long as i is less than or equal to num, and incrementing i by 1 each time the loop runs.
// Within the loop, multiply total by i, and save the product to the variable total.
// Return total as the answer.