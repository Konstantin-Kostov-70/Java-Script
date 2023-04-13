import { useState } from "react"
import { ReactComponent as AddIcon } from "../../assets/add-icon.svg"
import { addProductToCart } from "../../services/product-service"
import { toast} from 'react-toastify'

function ShoppingCartForm({setRefreshProducts}) {
   let [itemName, setItemName] = useState('')
   let [itemCost, setItemCost] = useState('')
   let [itemUrl, setItemUrl] = useState('')

   const onClickHandler = (event) => {
      event.preventDefault()
      addProductToCart(itemName, itemCost, itemUrl)
      .then(() => {
         setItemName('')
         setItemCost('')
         setItemUrl('')
         setRefreshProducts({})
         toast('Product added!', {type: 'success', autoClose: 1500})
      })
      .catch(err => {
         toast('Something went wrong', {type: 'error', autoClose: 1500})
      })
     
   }
    return (
        <form>
             <div className="shopping-cart__form-control"><input value={itemName} type="text" name="item-name" placeholder="Name" onChange={(ev) => setItemName(ev.target.value)}/></div>
             <div className="shopping-cart__form-control"><input value={itemCost} type="number" name="item-cost" placeholder="Cost" onChange={(ev) => setItemCost(ev.target.value)} /></div>
             <div className="shopping-cart__form-control"><input value={itemUrl} type="text" name="item-image" placeholder="Place image url here" onChange={(ev) => setItemUrl(ev.target.value)} /></div>
             <div className="shopping-cart__form-control">
                <button onClick={onClickHandler} type="submit" disabled={!itemName || !itemCost || !itemUrl}>
                   <span>Add</span>
                   <AddIcon/>
                </button>
             </div>
          </form>
    )
}

export default ShoppingCartForm