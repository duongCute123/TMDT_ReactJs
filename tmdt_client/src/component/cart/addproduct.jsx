import { Add, Delete } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { add_shoping_cart, IncreaseQuantity, DecreaseQuantity, xoa_cart } from "../action/addcart"
const ShoppingCarrt = () => {
    const items = useSelector(state => state.shoping.Cart)
    var {id}=useParams()
    const dispatch=useDispatch()

    const Country = ({ country: { tenSp, giaSP, anh, quantity, id } }) => {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr style={{ alignItems: "center" }}>
                            <th>ID Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Số Lượng</th>
                            <th>Giá Sản Phẩm</th>
                            <th>Ảnh Sản Phẩm</th>
                            <th>Tổng Tiền</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{id}</td>
                            <td>{tenSp}</td>
                            <td>{quantity}</td>
                            <td>{giaSP}</td>
                            <td><img style={{ width: "100px" }} src={anh} alt={tenSp} /></td>
                            <td>{giaSP*quantity}</td>
                            <td>
                                <Button onClick={()=>dispatch(xoa_cart(id))} startIcon={<Delete/>}>Xoá</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    // countries component
    const Countries = ({ items }) => {
        const countryList = items.map((country) => <Country country={country} />)
        return <div>{countryList}</div>
    }
    console.log(items);
    return (
        <div className="shop-cart">
            <h1>Danh sách các sản phẩm đã thêm vào</h1>

            <Countries items={items}/>
            <Button style={{
                marginLeft:"80%"
            }} startIcon={<Add/>}><Link to={"/home"}>Thanh Toán</Link></Button>
        </div>
    )
}
export default ShoppingCarrt