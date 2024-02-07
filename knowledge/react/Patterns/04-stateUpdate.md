---
sidebar_position: 4
---

# Correct State Update

Certainly! In modern functional React, you often work with arrays and objects in a declarative manner. Here are examples for each operation (add, delete, update, filter, find) with explanatory comments:

## Examples

### Add

#### At the beginning (Array)

```jsx
// Example: Adding a new item at the beginning of an array using spread operator
const updatedArray = [newItem, ...originalArray];
```

Explanation: This creates a new array with the `newItem` added at the beginning, without mutating the original array.

#### At the middle (Array)

```jsx
// Example: Adding a new item at the middle of an array using spread and slice
const updatedArray = [
  ...originalArray.slice(0, index), 
  newItem, 
  ...originalArray.slice(index)
];
```

Explanation: Slices the original array into two parts and inserts the `newItem` in the middle without modifying the original array.

#### At the end (Array)

```jsx
// Example: Adding a new item at the end of an array using spread operator
const updatedArray = [...originalArray, newItem];
```

Explanation: Creates a new array with the `newItem` added at the end, without modifying the original array.

#### To an object

```jsx
// Example: Adding a new key-value pair to an object
const updatedObject = { ...originalObject, newKey: newValue };
```

Explanation: Creates a new object with the `newKey` and `newValue` added, without mutating the original object.

### Delete

#### From an array

```jsx
// Example: Deleting an item from an array using filter
const updatedArray = originalArray.filter(item => item !== itemToDelete);
```

Explanation: Creates a new array excluding the `itemToDelete` without modifying the original array.

#### From an object

```jsx
// Example: Deleting a property from an object using destructuring and rest operator
const { propertyToDelete, ...updatedObject } = originalObject;
```

Explanation: Creates a new object without the `propertyToDelete` without modifying the original object.

### Update

#### In an array

```jsx
// Example: Updating an item in an array using map
const updatedArray = originalArray.map(item => 
  item.id === itemId ? { ...item, updatedProperty: newValue } : item
);
```

Explanation: Creates a new array with the specific item updated without modifying the original array.

#### In an object

```jsx
// Example: Updating a property in an object
const updatedObject = { ...originalObject, updatedProperty: newValue };
```

Explanation: Creates a new object with the specific property updated without modifying the original object.

### Filter

#### For an array

```jsx
// Example: Filtering items in an array based on a condition
const filteredArray = originalArray.filter(item => item.condition === true);
```

Explanation: Creates a new array containing only items that satisfy the specified condition.

### Find

#### Find in an array

```jsx
// Example: Finding an item in an array based on a condition
const foundItem = originalArray.find(item => item.id === targetId);
```

Explanation: Returns the first item that satisfies the specified condition in the array.

These examples showcase common operations when working with arrays and objects in a functional React context. The use of spread operators, array methods, and destructuring ensures immutability and helps maintain a clean and predictable state.
