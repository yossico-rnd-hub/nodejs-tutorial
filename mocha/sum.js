module.exports = function () {

    // convert arguments object to an array:​
    //     the "arguments object" is an array-like object that stores all the parameters passed to a function
    //     (even if the function declaration doesn’t specify any parameters).​
    var args = Array.prototype.slice.call(arguments);

    // Throw error if arguments contain non-finite number values
    if (!args.every(Number.isFinite))
        throw new TypeError('sum() expects only numbers.')

    // return the sum of the arguments:​
    //     the reduce() method reduces an array to a single value.​
    //     the reduce() method executes a provided function for each value of the array (left-to-right).​
    //     the return value of the function is stored in an accumulator.​
    return args.reduce(function (a, b) { // (a is the accumulator)
        return a + b
    }, 0);
}
