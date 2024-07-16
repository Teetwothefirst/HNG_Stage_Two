import ShopItems from './assets/ShopItems.png'


function ProductDetails(){
    
    function addMore(){
        
  }

    console.log("Check 1,2,3");
    return(
        <>
            <div>
                
        <main>
          <div></div>
          <div className='cart'><h3>Cart</h3></div>
          <div className='d-lg-flex justify-content-around'>
            <img src={ShopItems} alt="" />
            <div>
              <div className=''>
              <h4>La Rosary Sunscreen set</h4>
              <p> Each formulation is crafted with care using the finest ingredients to ensure your complexion feels radiant and rejuvenated.</p>
              <strong>#55,000</strong>
              </div>
              <div className='p-3'>
                <div><span>1</span> <button className='btn-count' onClick={addMore()}><i className="bi bi-plus"></i></button></div>
                <div className='d-flex justify-content-evenly'><button className='btn-unblue p-1'>Add to Cart</button> <button className='btn-blue'>Buy Now</button></div>
              </div>
            </div>
          </div>
          <div>
            <div className="continue-shopping"><a href="#"><i className="bi bi-arrow-left"></i> Continue Shopping</a></div>
          </div>
        </main>
            </div>
        </>
    )
}

export default ProductDetails;