function mapToNegativize(arr) {
    return arr.map(function(element) {
        if (element < 0) {
            return Math.abs(element);
        } 
        else if (element > 0) {
            return -Math.abs(element);
        }
    });
};

function mapToNoChange(arr) {
    return arr.map(function(element) {
        return element;
    });
};

function mapToDouble(arr) {
    return arr.map(function(element) {
        return element * 2;
    });
};

function mapToSquare(arr) {
    return arr.map(function(element) {
        return element * element;
    });
};  

function reduceToTotal(arr, startingPoint = 0) {
    let total = startingPoint
    for(let num of arr){
        total = total + num;
    }
    return total;
};

function reduceToAllTrue(arr) {
    let returnValue;
    for (const element of arr) {
        !!element === true ? returnValue = true : returnValue = false;
    }
    return returnValue;
};

function reduceToAnyTrue(arr) {
    let returnValue = false;
    for (const element of arr) {
        if (!!element === true) {
            returnValue = true;
        };
    }
    return returnValue;
};
