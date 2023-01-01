export class HackerRankSolutions {
  public arraySum(ar: number[]): number {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
    }
    return sum;
  }

  public compareTriplets(a: number[], b: number[]): number[] {
    const result: number[] = [0, 0];
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) result[0]++;
      else if (a[i] < b[i]) {
        result[1]++;
      }
    }
    return result;
  }
  public aVeryBigSum(ar: number[]): number {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
    }
    return sum;
  }
  public diagonalDifferance(arr: number[][]): number {
    let result: number = 0;
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
  public plusMinus(arr: number[]): void {
    const result: number[] = [0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] > 0 ? result[0]++ : arr[i] < 0 ? result[1]++ : result[2]++;
    }
    result.forEach((number) => console.log(number / arr.length));
  }
  public staircase(n: number): void {
    let result: string = "";
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
  public miniMaxSum(arr: number[]): void {
    const sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    let sum: number = 0;
    for (let i = 0; i < sortedArr.length; i++) {
      sum += sortedArr[i];
    }
    console.log(sum - sortedArr[0]);
    console.log(sum - (sortedArr[sortedArr.length-1]));
  }
}


