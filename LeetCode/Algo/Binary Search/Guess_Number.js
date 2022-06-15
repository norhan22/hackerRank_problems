/*
* 374. Guess Number Higher or Lower:
------------------------------------
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.
* https://leetcode.com/problems/guess-number-higher-or-lower/
*/
// Solution
var guessNumber = function(n) {

    let min = 1, max = n

    while (min <= max) {

        const
            mid = Math.floor((min + max) / 2),
            checkGuess = guess(mid)

        if (checkGuess === 0) return mid
        else if (checkGuess === -1) max = mid - 1
        else min = mid + 1
    }
}


