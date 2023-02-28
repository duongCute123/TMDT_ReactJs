import { PeopleAlt } from "@mui/icons-material"
import { TextField } from "@mui/material"
import anh1 from "../../../../module.image/1-slideshow.jpg"
import anh2 from "../../../../module.image/4-award-show-package.jpg"
import anh3 from "../../../../module.image/6-it-slideshow.jpg"
import anh4 from "../../../../module.image/8-slideshow.jpg"
const HeaderPage = () => {
   
    return (
        <div className="header-page" style={{width:"100%"}}>
            <div id="carouselId" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselId" data-slide-to="1"></li>
                    <li data-target="#carouselId" data-slide-to="2"></li>
                    <li data-target="#carouselId" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img style={{
                            width:"100%",height:"400px",objectFit:"cover"
                        }} src={anh1} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{
                            width:"100%",height:"400px",objectFit:"cover"
                        }} src={anh2} alt="Second slid/e"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{
                            width:"100%",height:"400px",objectFit:"cover"
                        }} src={anh3} alt="Third slide"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{
                            width:"100%",height:"400px",objectFit:"cover"
                        }} src={anh4} alt="Third slide"/>
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default HeaderPage