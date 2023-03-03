import anh1 from "../../../module.image/sp1.jpg"
import anh2 from "../../../module.image/sp2.jpg"
import FooterPage from "../../footerpage/footerpage"
import HeaderPage from "../menu/headermenu/headermenu"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react"
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
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
    const items = [];
    const sLuong = useSelector(state => state.shoping.numberCart)
    const mangProduct = useSelector(state => state.shoping.Cart)
    const distpatch = useDispatch()
    const [query, setQuery] = useState("")
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
            <TextField
                name="query"
                value={query}
                id="standard-search"
                label="Nhập tên sản phẩm cần tìm kiếm"
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                variant="standard"
                style={{
                    width: "35%",
                    marginLeft: "10px"
                }}
            />
            <h1 style={{ textAlign: "center", color: "red", marginBottom: "2%", marginTop: "2%" }}>Sản phẩm nhiều chị em lựa chọn</h1>
            {
                list.filter(lists => lists.tenSp.toLowerCase().includes(query)).map((lists) => {
                    return (
                        <div className="container-fluid" key={lists.id}>
                            <div className="list-product row" style={{ float: "left" }}>
                                <div className="infos-product" data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <img src={lists.anh} alt={list.tenSp} />
                                    <Link style={{ listStyle: "none" }} to={"/detailproduct/" + lists.id}>
                                        <div className="chitiet">
                                            <h4>{lists.tenSp}</h4>
                                            <p>Gia:${lists.giaSP}</p>
                                        </div>
                                    </Link>
                                    <div className="action" style={{
                                        justifyContent: "space-between",
                                        marginBottom: "2%",
                                        padding: "4px"
                                    }}>
                                        <Button style={{ margin: "4px" }} onClick={() => distpatch(add_shoping_cart(lists))} variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
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
            <div>
                {currentPageData.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}

                <SweetPagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={10}
                    getData={items}
                    navigation={true}
                />
            </div>
            <FooterPage />
        </div>
    )
}
export default HomePage