import anh1 from "../../../module.image/sp1.jpg"
import anh2 from "../../../module.image/sp2.jpg"
import FooterPage from "../../footerpage/footerpage"
import HeaderPage from "../menu/headermenu/headermenu"
const HomePage = () => {
    return (
        <div className="homepage container-fluid">
            <HeaderPage/>
            <h1 style={{textAlign:"center",color:"red",marginBottom:"2%",marginTop:"2%"}}>Sản phẩm nhiều Phụ huynh lựa chọn</h1>
            <div class="row">
                <div class="col-md-4">
                    <div class="thumbnail">
                        <a href="/detailproduct" target="_blank">
                            <img src={anh2} alt="Lights" />
                            <div class="caption">
                                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg" target="_blank">
                            <img src={anh2} alt="Nature" />
                            <div class="caption">
                                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="thumbnail">
                        <a href="/w3images/fjords.jpg" target="_blank">
                            <img src={anh2} alt="Fjords" />
                            <div class="caption">
                                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <FooterPage/>
        </div>
    )
}
export default HomePage