import { useState, useEffect } from "react"
import anh1 from "../../../module.image/sp1.jpg"
import NavBar from "../../home/menu/menu"
import FooterPage from "../../footerpage/footerpage"
import HomePage from "../../home/homepage/homepage"
import { Button } from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ModelItem from "./modelItem/modeliterm"
const InfoProduct = (props) => {
    const getmodel = () => {
        return <ModelItem />
    }
    const [SinhVien, setSinhVien] = useState([])
    useEffect(() => {
        setSinhVien(props.detail)
    }, [props.detail])
    return (
        <div className="info-product container-fluid">
            <div className="row">
                <div className="info-left col-sm-6">
                    <img style={{
                        width: "400px", objectFit: "cover"
                    }} src={anh1} alt="" />
                </div>
                <div className="info-right col-sm-6">
                    <h2>Tên sản phẩm</h2>
                    <p>Tình trạng:Còn hàng</p>
                    <p>Giá sản phẩm</p>
                    <p>Chọn số lượng muốn mua</p>
                    <div className="orther">
                        <Button data-toggle="modal" data-target="#modelId" variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
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
            </div>
            <div className="sp-lienquan">
            </div>
            <FooterPage />
        </div>
    )
}
export default InfoProduct