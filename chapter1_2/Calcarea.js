

export const circleArea1 = r => 3.14 * (r ** 2);

export const squareArea = s => s * s;

// export { circleArea, squareArea }; // {1}
export { circleArea1 as circle, squareArea as square };

export default class Book2 {
    constructor(title) {
    this.title = title;
    }
    printTitle() {
    console.log(this.title);
    }
    }
