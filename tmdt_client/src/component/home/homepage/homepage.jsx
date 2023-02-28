import anh1 from "../../../module.image/sp1.jpg"
import anh2 from "../../../module.image/sp2.jpg"
const HomePage = () => {
    return (
        <div className="homepage container-fluid">
            <h1>SẢN PHẨM</h1>
            <div class="row">
                <div class="col-md-4">
                    <div class="thumbnail">
                        <a href="/w3images/lights.jpg" target="_blank">
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
        </div>
    )
}
export default HomePage