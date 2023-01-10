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
    console.log(sum - sortedArr[sortedArr.length - 1]);
  }
  public timeConversion(s: any) {
    var time = s.toLowerCase().split(":");
    var hours = parseInt(time[0]);
    var _ampm = time[2];
    if (_ampm.indexOf("am") != -1 && hours == 12) {
      time[0] = "00";
    }
    if (_ampm.indexOf("pm") != -1 && hours < 12) {
      time[0] = hours + 12;
    }
    return time.join(":").replace(/(am|pm)/, "");
  }
  public grade(grades: []) {
    const result: number[] = [];
    for (const n of grades) {
      const nextMultiple = n + (5 - (n % 5));
      if (nextMultiple - n < 3 && n > 37) {
        result.push(nextMultiple);
      } else if (nextMultiple - n >= 3) {
        result.push(n);
      } else if (n < 37) {
        result.push(n);
      }
    }
    return result;
  }

  public kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    let t: number = (x2 - x1) / (v1 - v2);
    if (
      v1 * t + x1 == v2 * t + x2 &&
      t > 0 &&
      typeof t === "number" &&
      Number.isInteger(t)
    ) {
      return "YES";
    } else {
      return "NO";
    }
  }
  public breakingRecords(scores: number[]): number[] {
    let fullScore: number[] = [];
    const HighestScore: number[] = [];
    const LowestScore: number[] = [];
    let HighScore = scores[0];
    let lowScore = scores[0];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > HighScore) {
        HighScore = scores[i];

        if (scores[i] > scores[i - 1]) {
          HighestScore.push(scores[i]);
        } else if (HighScore > scores[i]) {
          HighestScore.push(HighScore);
        }
      } else if (scores[i] < lowScore) {
        lowScore = scores[i];
        if (scores[i] < scores[i - 1] && lowScore) {
          LowestScore.push(scores[i]);
        }
      }
    }
    let highLength = HighestScore.length;
    fullScore.push(highLength);
    let lowLength = LowestScore.length;
    fullScore.push(lowLength);
    return fullScore;
  }
  public birthdayCakeCandles(candles: number[]): number {
    const largestNumber = Math.max(...candles);
    const occurrences = candles.filter((number) => number === largestNumber);
    return occurrences.length;
  }
  public sockMerchant(n: number, ar: number[]): number {
    const result:{id:number,count:number}[] = []
    let numberOfPairs = 0
    for (let i = 0; i < ar.length; i++) {
      let current = result.find((x)=>x.id == ar[i])
      current == null
      ? result.push({ id: ar[i], count: 1 })
      : current.count++;
      if(current!=null && current.count % 2 == 0){
        numberOfPairs++
      }
    }
    return numberOfPairs
  }
}
