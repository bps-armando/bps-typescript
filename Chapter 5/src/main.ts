type One = string
type Two = string | number
type Three = 'hello'

// conver to more or less specific

let a: One = 'hello'
let b = a as Two
let c = a as Three

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b:number, c:'add'| 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
//String is returned but asserted as number
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//The DOM
const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src