function ProductItem(props) {
    const { name, cost, imgUrl, handleOnClick } = props
    return (
        <article>
            <p>Name: {name}</p>
            <p>Price: {cost}</p>
            <img width='100' height='100' src={imgUrl} alt='img' />
            <button onClick={handleOnClick}>Click me</button>
        </article>
    )
}

export default ProductItem
