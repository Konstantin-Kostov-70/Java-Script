import { toast } from "react-toastify"
import { ReactComponent as BuyIcon } from "../../assets/buy-icon.svg"
import { ReactComponent as RemoveIcon } from "../../assets/remove-icon.svg"
import { byProduct, removeProduct } from "../../services/product-service"

function ShoppingCartItem(props) {
   const { name, cost, imgUrl, isBought, _id, setRefreshProducts } = props
   const inlineStyles = {
      textDecoration: isBought ? 'line-through' : 'none',
   }
   const handleBuyItem = () => {
      byProduct(_id)
      .then(() => {
       setRefreshProducts({})
       toast(`Bought ${name}`, {type: 'info', autoClose: 1500})
      })
      .catch((err) => {
         toast('Something went wrong', {type: 'error', autoClose: 1500})
      })
   }

   const handleRemoveItem = () => {
      removeProduct(_id)
      .then(() => {
         setRefreshProducts({})
         toast(`Delete ${name}`, {type: 'warning', autoClose: 1500})
        })
        .catch((err) => {
         toast('Something went wrong', {type: 'error', autoClose: 1500})
        })
   }

   return (
      <article style={inlineStyles} className="shopping-cart__item-container">
         <img className="shopping-cart__item-img" src={imgUrl} alt="Item img" />
         <p className="shopping-cart__item-name">{name}</p>
         <p className="shopping-cart__item-cost">{Number(cost).toFixed(2)}</p>
         <div className="shopping-cart__item-actions">
            {
               !isBought && (
                  <button onClick={handleBuyItem} className="shopping-cart__item--buy-btn">
                     <span>Buy</span>
                     <BuyIcon />
                  </button>)
            }
            <button onClick={handleRemoveItem} className="shopping-cart__item--remove-btn">
               <span>Remove</span>
               <RemoveIcon />
            </button>
         </div>
      </article>
   )
}

export default ShoppingCartItem