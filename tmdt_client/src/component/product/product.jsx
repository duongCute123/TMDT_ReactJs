import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react"
import { Button } from "@mui/material";
import axios from "axios"
import HeaderPage from "../home/menu/headermenu/headermenu";
import FooterPage from "../footerpage/footerpage";
import "../home/homepage/homepage.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
const Product = () => {
    var { id } = useParams()
    const [list, setList] = useState([])
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
                                        <Button variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
                                            Launch
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
export default Product