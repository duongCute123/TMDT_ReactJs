import { useContext } from "react"
import { AuthContext } from "../context/authContetex"
import Product from "../product/product"
const HomePage=()=>{
    const {curent}=useContext(AuthContext)
    return(
        <div className="container-fluid">
            <h1>{curent?.ussername}</h1>
            <h1>Chào bạn đến với trang chủ nhé</h1>
            <Product/>
            
        </div>
    )
}
export default HomePage