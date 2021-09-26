// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1);
};

// function mapToNegativize(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(-1 * src[i]) // Unique work
//     }
//     return r
//   }

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x);
}

// function mapToNoChange(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(src[i]) // Unique work
//     }
//     return r
//   }



function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)

}

// function mapToDouble(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(2 * src[i]) // Unique work
//     }
//     return r
//   }

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x)
   
}
// function mapToSquare(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(src[i] * src[i]) // Unique work
//     }
//     return r
//   }


function reduceToTotal(sourceArray, startingPoint=0) {
    let reducer = function(previousValue, currentValue) {
        return previousValue + currentValue
    }
    return sourceArray.reduce(reducer, startingPoint)
}

/* if previousValue is truthy
    if currentValue is truthy
        set previousValue to Boolean(currentValue)
    else set previousValue to false
    return previousValue
return previousValue */

function reduceToAllTrue(sourceArray) {
    let reducer = function(previousValue, currentValue) {
        if(!!previousValue == true && !!currentValue == true) {
            return true;
        }
        else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
    let reducer = function(previousValue, currentValue) {
        if(previousValue == true) {
            return true; 
        }
        else {
            return !!currentValue;
        }
    }
    return sourceArray.reduce(reducer, false)
}

