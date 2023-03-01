import anh1 from "../../../module.image/sp1.jpg"
import anh2 from "../../../module.image/sp2.jpg"
import FooterPage from "../../footerpage/footerpage"
import HeaderPage from "../menu/headermenu/headermenu"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react"
import { Button } from "@mui/material";
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { add_shoping_cart, xoa_cart, DecreaseQuantity, IncreaseQuantity } from "../../action/addcart";
import "../homepage/homepage.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import SweetPagination from "sweetpagination";
const HomePage = () => {
    var { id } = useParams()
    const [list, setList] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const sLuong = useSelector(state => state.shoping.numberCart)
    const mangProduct = useSelector(state => state.shoping.Cart)
    const distpatch = useDispatch()
    useEffect(() => {
        axios.get(`http://localhost:8000/getProduct`)
            .then(res => {
                setList(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="homepage">
            <HeaderPage />
            <h1 style={{ textAlign: "center", color: "red", marginBottom: "2%", marginTop: "2%" }}>Sản phẩm nhiều Phụ huynh lựa chọn</h1>
            {
                list.map((lists) => {
                    return (
                        <div className="container-fluid" key={lists.id}>
                            <div className="list-product row" style={{ float: "left" }}>
                                <div className="infos-product">
                                    <Link to={"/detailproduct/" + lists.id}>
                                        <img src={lists.anh} alt={list.tenSp} />
                                        <div className="chitiet">
                                            <h1>{lists.tenSp}</h1>
                                            <p>Gia:${lists.giaSP}</p>
                                        </div>
                                    </Link>
                                    <div className="action">
                                        <Button onClick={() => distpatch(add_shoping_cart(lists))} variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
                                            ADD CARD
                                        </Button>
                                        <Button variant="contained" endIcon={<LocalMallIcon />}>
                                            Buy
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <FooterPage />
        </div>
    )
}
export default HomePage