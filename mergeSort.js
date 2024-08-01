function mergeSort(array) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (array.length <= 1) {
    return array;
  } else {
    // Recursive case: divide the array into left and right halves
    const middleOfArray = array.length / 2;
    let leftHalf = array.slice(0, middleOfArray);
    let rightHalf = array.slice(middleOfArray);

    // Recursively divide and sort both halves
    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);

    // Define empty array for merging both sorted halves
    const merged = [];

    // Initialize two pointers to track numbers to compare in both halves
    let i = 0; // Left half array index
    let j = 0; // Right half array index

    // Merge the two sorted halves into one sorted array
    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] <= rightHalf[j]) {
        merged.push(leftHalf[i]);
        i++;
      } else {
        merged.push(rightHalf[j]);
        j++;
      }
    }

    // If there are remaining elements in the left half, add them to the merged array
    while (i < leftHalf.length) {
      merged.push(leftHalf[i]);
      i++;
    }

    // If there are remaining elements in the right half, add them to the merged array
    while (j < rightHalf.length) {
      merged.push(rightHalf[j]);
      j++;
    }

    return merged;
  }
}

// Function to generate an unsorted array of 100 random numbers
function generateUnsortedArray() {
  const unsortedArray = [];

  for (let i = 0; i < 100; i++) {
    const randomNum = Math.floor(Math.random() * 1000);
    unsortedArray.push(randomNum);
  }

  return unsortedArray;
}

// Example usage:

// Generate an unsorted array
const unsortedArray = generateUnsortedArray();
console.log("Unsorted Array:", unsortedArray);

// Sort the array using mergeSort
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray); // Print the sorted array to the console
