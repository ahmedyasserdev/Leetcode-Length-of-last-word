/**
 * @url https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) =>  {
    const words = s.split(' ').filter((word) => word.length > 0)
    
        return words.length  > 0 ?  words[words.length-1].length : 0
    };

