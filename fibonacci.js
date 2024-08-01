const fib = (limit = 10) => {
  // Define starting numbers
  let num1 = 0;
  let num2 = 1;

  // Print the first Fibonacci number
  console.log(num1);

  if (limit > 1) {
    // Print the second Fibonacci number if limit is more than 1
    console.log(num2);
  }

  // Start the Fibonacci sequence
  fibonacci(num1, num2, limit - 2);

  function fibonacci(num1, num2, remaining) {
    // Base case: stop recursion when remaining count is 0
    if (remaining <= 0) {
      return;
    } else {
      // Calculate the next Fibonacci number
      const result = num1 + num2;

      // Print the result to the console
      console.log(result);

      // Update num1 and num2
      num1 = num2;
      num2 = result;

      // Recursive call with updated numbers and decrease remaining count
      fibonacci(num1, num2, remaining - 1);
    }
  }
};

// Example usage:
// Print 10 Fibonacci numbers
fib(10);
