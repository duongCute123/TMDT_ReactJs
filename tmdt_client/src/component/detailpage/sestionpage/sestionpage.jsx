import { useState, useEffect } from "react"
import anh1 from "../../../module.image/sp1.jpg"
import NavBar from "../../home/menu/menu"
import FooterPage from "../../footerpage/footerpage"
import HomePage from "../../home/homepage/homepage"
import { Button } from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ModelItem from "./modelItem/modeliterm"
import { useSelector, useDispatch } from "react-redux"
import { add_shoping_cart, IncreaseQuantity, DecreaseQuantity, xoa_cart } from "../../action/addcart"
import { useNavigate } from "react-router-dom"
const InfoProduct = (props) => {
    const addCard=useSelector(state=>state.shoping.Cart)
    console.log(addCard);
    const dispatch=useDispatch()
    const navigator = useNavigate()
    const getmodel = () => {
        navigator()
    }
    const [product, setProduct] = useState([])
    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])
    console.log(product);
    return (
        <div className="info-product container-fluid">
            {
                product.map((list) => {
                    return (
                        <div>
                            <div className="row">
                                <div className="info-left col-sm-6">
                                    <img style={{
                                        width: "400px", objectFit: "cover"
                                    }} src={list.anh} alt="" />
                                </div>
                                <div className="info-right col-sm-6">
                                    <h2>{list.tenSp}</h2>
                                    <p>Tình trạng:Còn hàng</p>
                                    <p>Giá sản phẩm:{list.giaSP}</p>
                                    <p>Chọn số lượng muốn mua</p>
                                    <div className="orther">
                                        <Button data-toggle="modal" onClick={()=>dispatch(add_shoping_cart(list))} data-target="#modelId" variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
                                            Launch
                                            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Modal title</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Body
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Button>
                                        <Button variant="contained" endIcon={<LocalMallIcon />}>
                                            Buy
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h1>
                                    Thông tin chi tiết sản phẩm
                                </h1>
                                <p>
                                    {list.thongTinSp}
                                </p>
                                <img style={{
                                    width:"450px",
                                    alignItems:"center",
                                    marginLeft:"400px"
                                }} src={list.anh} alt="" />
                                <p>
                                    Nhà sản xuất ra bộ quần áo này là:{list.anh}
                                </p>
                            </div>
                            <div className="sp-lienquan">
                            </div>
                            <div className="sp">
                                    
                            </div>
                            <FooterPage />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default InfoProduct