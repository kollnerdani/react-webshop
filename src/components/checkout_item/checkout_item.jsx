const CheckoutItem = ( {item:{ name, quantity, price, imageUrl}} ) =>{
    console.log('CheckoutItem')

    return (
        <div>
            <img src={imageUrl} alt={`${name}`}/><br/>
            <span className="name">{name}</span><br/>
            <span className="price">{quantity} x ${price}</span><br/>
            <span className="total">Total: ${quantity * price}</span>
        </div>
    )

}

export default CheckoutItem;