class BinarySearch {
    private arr: number[];
  
  constructor(arr: number[]) {
      this.arr = arr;
    }
    search(target: number): number {
      let low: number = 0;
      let high: number = this.arr.length - 1;
      while (low <= high) {
        const mid: number = Math.floor((low + high) / 2);
        if (this.arr[mid] === target) {
          return mid;
        } else if (this.arr[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return -1; // Target not found
    }
  }
  // Example:
  const sortedArray: number[] = [1, 2, 3, 4, 5];
  const targetValue: number = 3;
  const binarySearchInstance = new BinarySearch(sortedArray);
  const result = binarySearchInstance.search(targetValue);
  if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
  } else {
    console.log(`Target ${targetValue} not found in the array`);
  }