const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor)


const chai={
    name:"ginger tea",
    price:250,
       isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,'price'))
Object.defineProperty(chai,'price',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'price'))