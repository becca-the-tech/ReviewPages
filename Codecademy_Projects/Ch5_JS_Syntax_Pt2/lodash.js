const _ = {
    clamp(number, lowerBound, upperBound) {
        let lowerClampedValue = Math.max(number, lowerBound);
        let clampedValue = Math.min(lowerClampedValue, upperBound);
        return clampedValue;
    },

    inRange(number, startValue, endValue) {
        //if no end value is given, then startValue = 0 and the value assigned startValue is actually the end value
        if (endValue === undefined) {
            endValue = startValue;
            startValue = 0;
        }

        //swaps startValue and endValue if startValue greater than endValue
        if (startValue > endValue) {
            //saves original start value
            let originalStartValue = startValue;
            //swaps startValue with endValue
            startValue = endValue;
            //swaps endValue with original startValue
            endValue = originalStartValue;
        }

        let isInRange;
        //checks if num is less than startValue or greater or equal to endValue, if so returns false, else returns true
        if (number < startValue || number >= endValue) {
            isInRange = false;
        } else {
            isInRange = true;
        }
        return isInRange;
    },

    words(wordString) {
        wordArr = wordString.split(' ');
        return wordArr;
    },

    pad(string, length) {
        //if the string is longer than length, no padding required just return string
        //if string shorter than length, change length to be given length - string.length
        if (string.length < length) {
            let padding = length - string.length;
            //isOdd will be true if not even padding
            let isOdd = (padding % 2 !== 0);
            //      console.log("isOdd: " + isOdd);

            let perSide = Math.floor(padding / 2);
            //      console.log("Per side: " + perSide);

            for (let i = 1; i <= perSide; i++) {
                string = " " + string + " ";
            }

            if (isOdd) {
                string += " ";
            }
        }
        return string;
    },

    has(object, key) {
        if (object[key] !== undefined) {
            return true;
        } else {
            return false;
        }
    },

    invert(object) {
        let invertedObject = {};
        for (const key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    //predicateFunction returns a boolean value
    findKey(object, predicateFunction) {
        for (const key in object) {
            let value = object[key];
            //if the predicateFunction on value from object returns a truthy value, then return the key that caused that truthy value
            if (predicateFunction(value)) {
                return key;
            }
        }
        //if no truthy value found, return undefined
        return undefined;
    },

    drop(arr, num) {
        if (num === undefined) {
            num = 1;
        }
        for (let i = 1; i <= num; i++) {
            arr.shift();
        }
        return arr;
    },

    dropWhile(arr, predicateFunc) {
        let dropNumber = arr.findIndex((element, index) => {
            return (!predicateFunc(element, index, arr));
        });
        let droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
    },

    chunk(arr, size) {
        //if no size given, make it 1
        if (size === undefined) {
            size = 1;
        }

        //array for the chunks of arrays to be stored in
        let arrayChunks = [];

        //integer number of chunks that should be in the array
        let numChunks = Math.floor(arr.length / size);
        let isUnevenSize = false;

        //checks if last chunk will be uneven
        if (arr.length % size !== 0) {
            isUnevenSize = true;
        }

        //counter of where the chunk is in the for loop, miniArray temporarily stores the new chunks
        let currentChunk = 1;
        let miniArray = [];

        //iterates through the original array to create mini arrays of chunk
        for (let i = 0; i < arr.length; i++) {
            //checks if this is the last element in an array of uneven size
            if (isUnevenSize === true && arrayChunks.length === numChunks && i === (arr.length - 1)) {
                miniArray.push(arr[i]);
                arrayChunks.push(miniArray);
                //checks if its the last chunk of an array of uneven size but not the last element
            } else if (isUnevenSize === true && arrayChunks.length === numChunks) {
                miniArray.push(arr[i]);
                //for the even chunks, adds element to the mini array and increases counter
            } else {
                if (currentChunk < size) {
                    miniArray.push(arr[i]);
                    currentChunk++;
                    //if element is on the last element of that size chunk, adds it to mini array then adds the miniArray to arrayChunks and then resets currentChunk and resets miniArray
                } else if (currentChunk === size) {
                    miniArray.push(arr[i]);
                    arrayChunks.push(miniArray);
                    miniArray = [];
                    currentChunk = 1;
                }
            }
        }

        return arrayChunks;
    }

    //this bracket closes the lodash object
};




// Do not write or modify code below this line.
module.exports = _;
