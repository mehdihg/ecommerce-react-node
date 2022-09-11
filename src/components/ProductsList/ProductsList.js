
import { Link } from "react-router-dom"
import * as data from '../../data'
import Button from "../Form/Button/Button"
import ProductSlider from "../ProductSlider/ProductSlider"
import './ProductsList.css'
const ProductsList=()=>{
 /* const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://nodejs-post-app.herokuapp.com/api/product')
        .then(res=>setProducts(res.data))
        .catch(err=>err)
    },[])
    return(
        <div>
                <ProductSlider src={products}>
                {
            products.map((item)=>{
                return(
                    <div className="products-container">
                        <div>
                        <img src={item.image} alt={item.name}/>
                        <div>dasd</div>
                        </div>
                    </div>
                )
            })
           }   
                </ProductSlider>

        </div>
            width: 300px;
    border-radius: 5px;
    height: 300px;
        background-color: #181818;
    *box-shadow: 5px 5px 5px 0px rgb(0 0 0 / 30%);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
    border-radius: 3px;
    background-color: #222222;
    transform: translateY(5px);
    box-shadow: inset 0px 10px 20px 2px rgb(0 0 0 / 25%);
    )*/  
    return(
        <div>
                <ProductSlider>
                {
            data.products.map((item)=>{
                return(
                    <div className="product-container" key={item.id}>
                        <div className="product">
                        <img src={item.image} alt={item.name}  className="product-img"/>

                        <Button className="product-button">add to cart</Button>
                        <Link to={`/products/${item.id}`}>
                        <Button className="product-button">details</Button>
                        </Link>
                        <div className="product-price">{item.price}$</div>
                                
                        </div>
                    </div>
                )
            })
           }   
                </ProductSlider>

        </div>

    )
    }
export default ProductsList