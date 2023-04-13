import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem"
import ShoppingCartForm from "../ShoppingCartForm/ShoppingCartForm"
import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/product-service"
import { toast } from "react-toastify"


function ShoppingCart() {
    let [products, setProducts] = useState([])
    let [refreshProducts, setRefreshProducts] = useState({})

    useEffect(() => {
        getAllProducts()
        .then((allProduct) => {
            setProducts(Object.values(allProduct))
        })
        .catch((err) => {
            toast('Something went wrong', {type: 'error', autoClose: 1500})
        })
    }, [refreshProducts])

    let totalPrice = products
    .filter(p => p.isBought)
    .reduce((sum, product) => sum + product.cost, 0)

    return (
        <section className="shopping-cart__container">
            <ShoppingCartForm setRefreshProducts={setRefreshProducts}/>
            <section className="shopping-cart__items-list">
                {
                   products.map(p => (
                    <ShoppingCartItem key={p.id} {...p} setRefreshProducts={setRefreshProducts}/>
                   ))
                }
            </section>
            <div className="shopping-cart__total-price">
                <h1>Total Price: {totalPrice.toFixed(2)}$</h1>
            </div>
        </section>
    )
}

export default ShoppingCart