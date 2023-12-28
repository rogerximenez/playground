const name = 'Roger'
const userAge = 34

const user = {
    name,
    age: userAge,
    location: 'Dallas'
}

console.log(user)

// Object desructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// const label = product.label
// const stock = product.stock

// const {label, stock} = product
// const {label: productLabel, stock: productStock, rating = 5} = product
// console.log(productLabel)
// console.log(productStock)
// console.log(rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)