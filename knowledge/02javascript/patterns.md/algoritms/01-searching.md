---
sidebar_position: 1
---

# Searching

## 1. Binary Search Numbers

```ts
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

//Como se usa

const numbers = [1, 3, 5, 7, 9, 11, 15];

binarySearch(numbers, 7);   // 3
binarySearch(numbers, 2);   // -1


```

## 2. Binary Search Insersion Position

```ts
function binarySearchInsertIndex(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

//Como se utiliza

binarySearchInsertIndex([1, 3, 5, 7], 6); // 3


```
