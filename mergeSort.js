// FUNCTION mergeSort(array):
//     // BASE CASE:
//     if length of array is 1:
//         return array

//     // RECURSIVE CASE:
//     else if length of array is greater than 1:
//         // Divide the array into two halves
//         mid = length of array // 2
//         leftArr = array[0:mid]
//         rightArr = array[mid:length of array]

//         // Recursively sort both halves
//         numLeft = mergeSort(leftArr)
//         numRight = mergeSort(rightArr)

//         // Combine (merge) the two sorted halves into a single sorted array
//         merged = merge(numLeft, numRight)

//         // Return the merged array
//         return merged

// // Helper function to merge two sorted arrays
// FUNCTION merge(leftArr, rightArr):
//     merged = []
//     i = 0 // Index for leftArr
//     j = 0 // Index for rightArr

//     // Merge the two arrays while elements remain in both
//     while i < length of leftArr and j < length of rightArr:
//         if leftArr[i] <= rightArr[j]:
//             merged.append(leftArr[i])
//             i = i + 1
//         else:
//             merged.append(rightArr[j])
//             j = j + 1

//     // If there are remaining elements in leftArr, add them
//     while i < length of leftArr:
//         merged.append(leftArr[i])
//         i = i + 1

//     // If there are remaining elements in rightArr, add them
//     while j < length of rightArr:
//         merged.append(rightArr[j])
//         j = j + 1

//     return merged
