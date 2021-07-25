/*
Написать модуль для Node.JS, который преобразует массив чисел в строку по примеру:
[1,2,3,4,5,6,7,8] -> "1-8"
[1,3,4,5,6,7,8] -> "1,3-8"
[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"
[1,2,3] -> "1-3"
[1,2] -> "1,2"
[1,2,4] -> "1,2,4"
[1,2,4,5,6] -> "1,2,4-6"
[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21" [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002" [1] -> "1"
[1,3,5,7,9,11] -> "1,3,5,7,9,11"
Числа в массиве всегда целые, положительные и отсортированы по возрастанию.
  */

module.exports = {
    rangeOfNumbers(array) {
        return new Promise((resolve, reject) => {
            let st = array[0]
            const temp = []
            for (let i = 0; i < array.length; i++) {
                if (array[i + 1] === array[i] + 1) continue
                if(st === array[i])
                    temp.push(`${st}`)
                else if(array[i] - st === 1)
                    temp.push(`${st},${array[i]}`)
                else
                    temp.push(`${st}-${array[i]}`)
                st = array[i + 1]
            }
            resolve(temp.join(','))
        })
    }
}
