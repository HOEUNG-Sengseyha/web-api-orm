function displayShape() {
    let shape = '';
    for (let i = 5; i > 0; i--) {
        shape += '*  '.repeat(i).trim() + '\n';
    }
    console.log(shape);
}
displayShape();