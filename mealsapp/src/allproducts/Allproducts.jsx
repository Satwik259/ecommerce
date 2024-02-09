

import "./allproducts.css"

const Allproducts = ({ duplicatedata,onaddtocarttoclick}) => {


console.log('duplicatedata',duplicatedata)

  return (
    <div className='allprod'>



      {duplicatedata.map((item) => {
        return (
          <div className='card-style'>
            <div><img className='imag' src={item.image} alt="Avengers" /></div>
            <div className='text-adjust'>
              <div>{item.category.toUpperCase()}</div>
              <div>₹{item.price.toString().toUpperCase()}</div>
              <div>{item.title.toUpperCase().slice(0,80)}</div>
              <button onClick={()=>onaddtocarttoclick(item)} className='button-1'>ADD TO CART</button>
            </div>
          </div>
        
  )
})}

    
    

    </div >
  )
}

export default Allproducts