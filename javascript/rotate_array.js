function rotateArray(arr, k) {
    if (k > arr.length) k %= arr.length;
    let queue = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < k) queue.unshift(arr[i]);
        if (i >= k) {
            queue.unshift(arr[i]);
            arr[i] = queue.pop();
        }
    }

    let i = 0;
    while (queue.length !== 0) {
        arr[i] = queue.pop();
        i++
    }

    return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
