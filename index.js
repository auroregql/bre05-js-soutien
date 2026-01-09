/* Exercice 1 */

function displayArray(array)
{
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

displayArray([1, 2, 3, 4, 5]);
displayArray([10, 20, 30, 40, 50]);
displayArray([5, 4, 3, 2, 1]);
displayArray([100, 200, 300, 400, 500]);

/* Exercice 2 */

function displayArrayReverse(array)
{
    for(let j = array.length -1; j >= 0; j--) {
        console.log(array[j]);
    }
}

displayArrayReverse([1, 2, 3, 4, 5]);
displayArrayReverse([10, 20, 30, 40, 50]);
displayArrayReverse([5, 4, 3, 2, 1]);
displayArrayReverse([100, 200, 300, 400, 500]);


/* Exercice 3 */

function findLongestWord(words) {
    let longest = ""; 

    for (let k = 0; k < words.length; k++) {
        if (words[k].length > longest.length) {
            longest = words[k];
        }
    }

    console.log(longest);
}

findLongestWord(['hello', 'world', 'javascript', 'python', 'java']);
findLongestWord(['apple', 'banana', 'cherry', 'date', 'elderberry']);
findLongestWord(['cat', 'dog', 'elephant', 'fox']);


/*Exercice 4*/

function removeDuplicates(array) {
    let result = [];
    
    for (let l = 0; l < array.length; l++) {
     if (!result.includes(array[l])) {
            result.push(array[l]);
        }
    }
    console.log(result);
}

removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
removeDuplicates([10, 20, 30, 40, 50, 10, 20, 30, 40, 50]);
removeDuplicates([5, 4, 3, 2, 1, 5, 4, 3, 2, 1]);