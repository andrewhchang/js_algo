// Binary Search
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
    while(left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if(nums[mid]===target) {
           return mid
        } else if(nums[mid] > target){
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};

// Try to think of it in terms of left and right. It's easier than you think
// Left = 0, Right = Length
// While left < right
//      mid = left + search_area/2     **search area = floor(right - left) / 2
//
// if ===
//      return mid
// if >
//      right = mid
// if <
//      left = mid + 1

