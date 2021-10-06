const backtrack = (res, tempList, nums) => {
  if (tempList.length === nums.length) {
    res.push([...tempList]); //去除引用 不然最后会导致所有push进去的元素引用一致  最后产生全是空数组的结果
  }
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue
    tempList.push(nums[i]);
    backtrack(res, tempList, nums);
    tempList.length--;
  }
};
const permute = (nums) => {
  const res = [];
  backtrack(res, [], nums);
  return res;
};
console.log(permute([1, 2, 3]));

// 更短的版本
const backtrack2 = (res, tempList, nums) => {
  console.log(tempList)
  if (!nums.length) {
    res.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    console.log(tempList)
    backtrack(res,[...tempList,nums[i]],nums.slice(0, i).concat(nums.slice(i + 1))
    );
  }
};
const permute2 = (nums) => {
  const res = [];
  backtrack(res, [], nums);
  return res;
};
// list = []
// backtrack([],[],[1,2,3])
//     i=0;
//     backtrack([],[1],[2,3])
//         i=0;
//             backtrack([],[1,2],[3])
//                 i=0
//                 backtrack([],[1,2,3],[])
//                     res = [[1,2,3]]
//         i=1;
//             backtrack([],[1,3],[2])
//                 i=0
//                 backtrack([],[1,3,2],[])
//                     res=[[1,2,3],[1,3,2]]
//     i=1;
//     backtrack([],[2],[1,3])
//         i=0;
//             backtrack([],[2,1],[3])
//                 i=0
//                 backtrack([],[2,1,3],[])
//                     res=[[1,2,3],[1,3,2],[2,1,3]]
//         i=1;
//             backtrack([],[2,3],[1])
//                 i=0
//                 backtrack([],[2,3,1],[])
//                     res=[[1,2,3],[1,3,2],[2,1,3],[2,3,1]]
//     i=2;
//     backtrack([],[3],[1,2])
//         i=0;
//             backtrack([],[3,1],[2])
//                 i=0
//                 backtrack([],[3,1,2],[])
//                     res=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2]]
//         i=1;
//             backtrack([],[3,2],[1])
//                 i=0
//                 backtrack([],[3,2,1],[])
//                     res=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]]
// return list
