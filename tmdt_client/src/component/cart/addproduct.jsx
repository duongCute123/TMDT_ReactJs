import { useDispatch, useSelector } from "react-redux"
import { add_shoping_cart, IncreaseQuantity, DecreaseQuantity, xoa_cart } from "../action/addcart"
const ShoppingCarrt = () => {
    const items = useSelector(state => state.shoping.Cart)
    const Country = ({ country: { tenSp, giaSP, anh, quantity, id } }) => {
        return (
            <div>
                <table class="table">
                    <tbody>
                        <tr>
                            <td scope="row">{id}</td>
                            <td>{tenSp}</td>
                            <td>{quantity}</td>
                            <td>{giaSP}</td>
                            <td><img style={{width:"100px"}} src={anh} alt={tenSp} /></td>
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
            <table className="table">
                <thead>
                    <tr>
                        <th>ID Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Giá Sản Phẩm</th>
                        <th>Ảnh Sản Phẩm</th>
                        <th>Tổng Tiền</th>
                        <th>Action</th>
                    </tr>
                    <Countries items={items} />
                </thead>
            </table>
            
        </div>
    )
}
export default ShoppingCarrt