console.log("1.\tDisplay the numbers from 1 to 20. (1, 2, 3, ...,19, 20)\n");
for (let i = 1; i < 21; i++) {
    console.log(i);
}

console.log("\n2.\tDisplay the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)\n");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("\n3.\tDisplay the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)\n");
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

console.log("\n4.\tDisplay the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)\n");
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}

console.log("\n5.\tDisplay the square numbers up to 100. (1, 4, 9, ..., 81, 100)\n");
for (let i = 1; i * i <= 100; i++) {
    console.log(i * i);
}

console.log("\n6.\tDisplay the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)\n");
for (let i = 20; i > 0; i--) {
    console.log(i);
}

console.log("\n7.\tDisplay the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)\n");
for (let i = 20; i > 0; i -= 2) {
    console.log(i);
}

console.log("\n8.\tDisplay the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)\n");
for (let i = 20; i > 0; i--) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log("\n9.\tDisplay the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)\n");
for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}

console.log("\n10.\tDisplay the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)\n");
for (let i = Math.floor(Math.sqrt(100)); i > 0; i--) {
    console.log(i * i);
}