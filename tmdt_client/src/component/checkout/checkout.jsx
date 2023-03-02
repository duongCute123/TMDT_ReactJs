import { useSelector, useDispatch } from "react-redux"
import { Button } from "@mui/material"
import { Add, Delete } from "@mui/icons-material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from "../action/addcart"
const Checkout = ({ }) => {
    const items = useSelector(state => state.shoping.Cart)
    const dispatch = useDispatch()
    const Country = ({ country: { tenSp, giaSP, anh, quantity, id } }) => {
        return (
            <div className="container-fluid">
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
                            <td>{giaSP * quantity}</td>
                            <td>
                                <Button onClick={() => dispatch(xoa_cart(id))} startIcon={<Delete />}>Xoá</Button>
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
    const navigation=useNavigate()
    const [ngays, setDate] = useState('')
    const getList = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/checkout",forms,ngay_oder,items.id)
        .then(res=>{
            navigation("/home")
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const list = {
        fullname: "",
        thanhtoan: "",
    }
    const [forms, setForm]=useState(list)
    const hangchange=(e)=>{
        const {name,value}=e.target
        setForm({...forms,[name]:value})
    }
    const {thanhtoan,fullname}=forms
    const { ngay_oder } = ngays
    
    return (
        <div className="container-fluid">
            <div className="chekcout">
                <div className="checkout-left">
                    <h1>
                        Những sảm phẩm bạn đã mua là:
                    </h1>
                    <p>
                        <Countries items={items} />
                    </p>
                </div>
                <div className="checkout-">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlFor="">Nhập hộ và tên bạn</label>
                            <input type="text" value={fullname} name="fullname" onChange={hangchange} className="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="">Chọn hình thức thanh toán</label>
                            <select class="form-control" name="thanhtoan" value={thanhtoan} onChange={hangchange} id="">
                                <option>Chọn hình thức thanh toán</option>
                                <option>Chuyển Khoản</option>
                                <option>Nhận hàng rồi thanh toán</option>
                                <option>Nợ Mai Trả</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Ngày đặt sản phẩm</label>
                            <input type="date" value={ngay_oder} name="ngay_oder" onChange={(e) => setDate(e.target.value)} className="form-control" />
                        </div>
                        <input type="submit" onClick={getList} value="Checkout" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Checkout