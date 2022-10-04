import React from 'react'

export const Product = () => {
  return (
    <div className="card" style={{width: '18rem',marginLeft:50,marginTop:50, marginBottom:50}}>
    <div className="drawer" style={{display:'centre'}}>
      <div className="drawer-data">
          <div className="product-drawer">
            <div className="product-heading"> <h3>Products</h3></div>
          </div>
          <div className="image-and-description-drawer">
            <div className="image-details">
              <img className="product-image" variant="Top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONgnbnNqtujaJVCHsfGSU3gjVd2kU80SDWn8X7SiM-ViaAHNlnW0aIkDZzV2HC0v3J1Q&usqp=CAU"  alt="..." />
              <div className="describe price and name">
                <h4 text-align='centre'>Romy Bracelet</h4>
                <p>$35.00</p>
              </div>
            </div>
            <h2 className="description">Description</h2>
            <div className="product-description"><p>Stylish and stackable stretch&nbsp;bracelet with shiny crystal beads.</p></div>
          </div>
          <button className="revo-embed-add-to-cart-button" onclick=""> ADD TO CART</button>
        </div></div>
      </div>
    /*<div className="card" style={{width: '18rem',marginLeft:50,marginTop:50, marginBottom:50}}>
        <div className="card-body">
          <h5 class="card-title">Product</h5>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <div className='image-wrapper'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONgnbnNqtujaJVCHsfGSU3gjVd2kU80SDWn8X7SiM-ViaAHNlnW0aIkDZzV2HC0v3J1Q&usqp=CAU" className="card-img-top" alt="..." />
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="btn btn-primary">ADD TO CART</p>
        </div>
      </div>*/
      
  )
}
