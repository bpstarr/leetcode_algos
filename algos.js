// If target is in array, return its index, otherwise return -1
var search = function(nums, target) {
    var targetIndex = -1
    for (var i = 0;i < nums.length;i++) {
        if (nums[i] == target) {
            targetIndex = [i]
            return targetIndex
        } 
    }
    if (targetIndex == -1){
        return targetIndex
    }
};

// First bad version of API and everything after are bad
var solution = function(isBadVersion) {
    
    return function(n) {
        let l = 1, r = n
        while (l < r) {
            const m = Math.floor((r + l) / 2)
            if (!isBadVersion(m)) l = m + 1
            else r = m
        }
        
        return l
        
    };
};

// Return the index of the target in a sorted array, if it isn't there return the index of where it would be
var searchInsert = function(nums, target) {
    var start = 0;
    var end = (nums.length)-1
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(target>nums[mid]){
            start = mid+ 1
        }
        else {
            end = mid-1
        }
    }
    return start
};

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