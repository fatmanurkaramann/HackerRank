"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HackerRankSolutions = void 0;
class HackerRankSolutions {
    arraySum(ar) {
        let sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
        return sum;
    }
    compareTriplets(a, b) {
        const result = [0, 0];
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i])
                result[0]++;
            else if (a[i] < b[i]) {
                result[1]++;
            }
        }
        return result;
    }
    aVeryBigSum(ar) {
        let sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
        return sum;
    }
    diagonalDifferance(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i + j == arr.length - 1) {
                    result -= arr[i][j];
                }
            }
            result += arr[i][i];
        }
        return Math.abs(result);
    }
    plusMinus(arr) {
        const result = [0, 0, 0];
        for (let i = 0; i < arr.length; i++) {
            arr[i] > 0 ? result[0]++ : arr[i] < 0 ? result[1]++ : result[2]++;
        }
        result.forEach((number) => console.log(number / arr.length));
    }
    staircase(n) {
        let result = "";
        for (let i = n; i > 0; i--) {
            for (let k = 0; k < i - 1; k++) {
                result += " ";
            }
            for (let j = 0; j < n - i + 1; j++) {
                result += "#";
            }
            result += "\n";
        }
        console.log(result);
    }
    miniMaxSum(arr) {
        const sortedArr = arr.sort(function (a, b) {
            return a - b;
        });
        let sum = 0;
        for (let i = 0; i < sortedArr.length; i++) {
            sum += sortedArr[i];
        }
        console.log(sum - sortedArr[0]);
        console.log(sum - (sortedArr[sortedArr.length - 1]));
    }
}
exports.HackerRankSolutions = HackerRankSolutions;
//# sourceMappingURL=hacker-rank-solutions.js.map