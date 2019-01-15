// ————————————————————————————————————箭头函数————————————————————————————————————————————

const fn = () => {
    console.log('fn')
}
fn()

// ————————————————————————————————————对象rest和spread————————————————————————————————————————————
/* 
var o1={a:1,b:2}
var o2={...o1,c:3}
console.log(o2)

var {d,...o3}={d:4,e:5,f:6}
console.log(o3) 
*/

// ————————————————————————————————————class静态方法，es6规定不支持静态属性————————————————————————————————————————————
/* 
class C {
    constructor(name) {
        this.name = name
    }
    // static a:1  //ES6 明确规定，Class 内部只有静态方法，没有静态属性。
    static getA() {
        console.log('class static func')
    }
}
// console.log(C.a)
C.getA()
 */

/* 
class C {
    constructor(name) {
        this.name = name
    }
    // static a:1  //ES6 明确规定，Class 内部只有静态方法，没有静态属性。
    static getA() {
        console.log('class static func')
    }
}
// console.log(C.a)
C.getA() 
*/
// ———————————————————————————————————————decorator装饰器—————————————————————————————————————————
// @testDeco
// class A {
// }
// function testDeco() {
//     console.log('decorator装饰器测试')
// }
// new A()
// ———————————————————————————————————————js读取webpack中的process.env.NODE_ENV—————————————————————————————————————————
// console.log(`读取webpack中的mode为：${process.env.NODE_ENV}`,)
// ———————————————————————————————————————import less文件—————————————————————————————————————————
// import "./style/index.less"
// import "./style/other.less"
// ———————————————————————————————————————测试hot—————————————————————————————————————————
console.log(1)
if (module.hot) { // hmr necessary
    // console.log(module,module.hot,'module')
    module.hot.accept();
}


