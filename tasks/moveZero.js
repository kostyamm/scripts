const moveZeroes = function(nums) {
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i; j < nums.length - 1; j++) {
    //         if (nums[i] === 0 && !!nums[j + 1] ) {
    //             [nums[j + 1], nums[i]] = [nums[i], nums[j + 1]]
    //         }
    //     }
    // }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0);
        }
    }

    console.log(nums)
};

moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
moveZeroes([0,0,1]) // [1,0,0]