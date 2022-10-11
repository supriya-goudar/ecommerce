
import {Link} from 'react-router-dom'
function Products()
{
return(

    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div>
            <h1>Products Page</h1>
       <Link to='/cart'><button className='btn btn-warning'>Go to cart</button></Link>
    </div>
    </div>
)
}
export default Products;