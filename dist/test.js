const myFunc = (a, b, run) => {
    let box = a + b;
    console.log(box);
    run();
};
myFunc(2, 2, () => { console.log("object"); });
export {};
//# sourceMappingURL=test.js.map