async function test() {
    console.log("first");
    a = test2();
    console.log(a);
    return 123;
}
    function test2() {
        setTimeout(() => {
            console.log("second function");
        }, 5000);
        return "some data";
    }
console.log(test().then((v) => {
    console.log("from then");
    console.log(v);
})
.catch((er) => console.log(er)));
