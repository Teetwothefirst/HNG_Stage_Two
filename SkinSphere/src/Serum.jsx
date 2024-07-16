import SerumImg from './assets/SerumImg.png'

function Serum(){
    return(
        <>
            <div className="card col-12 col-md-6 col-lg-3 border-0 shadow p-0 mb-3">
            <div className="card-body p-0">
                <img src={SerumImg} className="card-ing-top" alt="" />
                
                <div className='d-flex justify-content-between p-3'>
                    <div>
                        <h6 className="card-title">La Rosary Sun Screen Set</h6>
                        <div className='d-flex justify-content-start'>
                        <small> ₦52,000</small>
                        </div>
                    </div>
                    <div>
                    <button className="btn-blue" id='cart'><i className="bi bi-cart"></i></button>
                </div>             
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Serum;