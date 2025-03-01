const fibonacci = function(n) {
    // 0, 1, 1, 2, 3, 5, 8, 13... Fibonacci Nums
    // 0, 1, 2, 3, 4, 5, 6, 7...  Indexes

    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    }

    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
