// Square and return array with all values squared

var sortedSquares = function(nums) {
    newArr = [];
    for (var i = 0; i < nums.length;i++) {
        newArr.push(nums[i]*nums[i])
    }
    return newArr.sort(function(a, b) {return a-b})
};

// Rotate array nums to  the right k times

var rotate = function(nums, k) {
    while (k--){
        const shifted = nums.pop();
        nums.unshift(shifted)
    }
};

// Move 0 values to the end of the array

var moveZeroes = function(nums) {
    let lastZero =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            [nums[lastZero],nums[i]] = [nums[i],nums[lastZero]];
            lastZero++;
        }
    }
    return nums;
};

// If two numbers added together = the target then return the two numbers in an array

var twoSum = function(numbers, target) {
    let leftPointer = 0
    let rightPointer = numbers.length - 1
    while( numbers[leftPointer] + numbers[rightPointer] !== target ) {
        if(numbers[leftPointer] + numbers[rightPointer] > target) rightPointer--
        else leftPointer++
    }
    return [leftPointer+1, rightPointer+1]
};