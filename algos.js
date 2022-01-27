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