import './index.css'
import ShopItems from './assets/ShopItems.png'

function AllNew(){
   return(
    <>
        <div className='row mt-5'>

        <div className="card col-6 col-lg-4 border-0 shadow">
            <img src={ShopItems} className="card-ing-top" alt="" />
            <div className="card-body">
                <div>
                <h5 className="card-title">La Rosary Sun Screen Set</h5>
                </div>
                <div>
                    <button className="btn-blue"><i class="bi bi-cart"></i></button>
                </div>
            </div>
        </div>
        </div>
        
    </>
   ) 
}

export default AllNew;