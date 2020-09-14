// 2020.09.14

/*
 * 回溯算法
 * 时间复杂度：
 * 空间复杂度：
 */
const combinationSum2 = (candidates, target) => {
  candidates.sort();    // 排序
  const res = [];

  const dfs = (start, temp, sum) => { // start是索引 当前选择范围的第一个
    if (sum >= target) {        // 爆掉了，不用继续选了
      if (sum == target) {      // 满足条件，加入解集
        res.push(temp.slice()); // temp是地址引用，后续还要用，所以拷贝一份
      }
      return;                   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) {             // 枚举出选择
      if (candidates[i - 1] == candidates[i] && i - 1 >= start) { // 当前选项和隔壁选项一样，跳过
        continue;
      }
      temp.push(candidates[i]);              // 作出选择
      dfs(i + 1, temp, sum + candidates[i]); // 递归，向下选择，并更新sum
      temp.pop();                            // 撤销选择，
    }
  };

  dfs(0, [], 0);
  return res;
};

// 参考： https://leetcode-cn.com/problems/combination-sum-ii/solution/man-tan-wo-li-jie-de-hui-su-chang-wen-shou-hua-tu-/
