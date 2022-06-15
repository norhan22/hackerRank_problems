// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
    // Write your code here
    const sums =[];

    for (let i = 0 ; i <arr.length;i++){

        for(let j =0;j<arr[i].length;j++){

            const
                isBetween=arr[i][j]>=-9 && arr[i][j]<=9,
                isRowExist= arr[i+1] !== undefined && arr[i+2] !== undefined ,
                isColExist=(k)=> arr[k][j+1] !== undefined && arr[k][j+2] !== undefined

            if(isRowExist && isColExist(i+1) && isColExist(i+2) && isBetween){

                const sum =
                    arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1]+
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

                sums.push(sum)

            }
        }
    }

    return Math.max(...sums)



}