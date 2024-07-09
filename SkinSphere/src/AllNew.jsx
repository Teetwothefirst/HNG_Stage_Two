import './index.css'
import ShopItems from './assets/ShopItems.png'

function AllNew(){

    // const 
   return(
    <>
        {/* <div className='row'> */}
        {/* <h3>Most Bought Products</h3> */}
        <div className="card col-6 col-lg-3 border-0 shadow p-0">
            <div className="card-body p-0">
                <img src={ShopItems} className="card-ing-top" alt="" />
                
                <div className='d-flex justify-content-between p-3'>
                    <div>
                        <h6 className="card-title">La Rosary Sun Screen Set</h6>
                        <div className='d-flex justify-content-start'>
                        <small>#52,000</small>
                        </div>
                    </div>
                    <div>
                    <button className="btn-blue" id='cart'><i class="bi bi-cart"></i></button>
                </div>             
                </div>
                
            </div>
        </div>
        {/* </div> */}
        
    </>
   ) 
}

export default AllNew;