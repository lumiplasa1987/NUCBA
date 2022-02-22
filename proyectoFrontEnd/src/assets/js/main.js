let products = []
const cart = document.getElementById('cart')

const addGuitar = (product, price) => {
    products.push({product: product, price:price})

    console.log(products)
}