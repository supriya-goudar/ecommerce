
import {Link} from 'react-router-dom'
function Landingpage()
{
return(

    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div>
            <h1>Landing Page</h1>
       <Link to='/products'><button className='btn btn-primary'>View Products</button></Link>
    </div>
    </div>
)
}
export default Landingpage;