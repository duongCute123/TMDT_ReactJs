import FooterPage from "../footerpage/footerpage"
import { useEffect,useState } from "react"
import axios from "axios"
const News=()=>{
    return(
        <div className="news">
            <div className="title">
                <h1>Tiêu đề của tin tức</h1>
                <p>
                    Ngày đăng tin tức
                </p>
            </div>
            <div className="noi-dung">
                <p>Nội dung tin tức nhé</p>
            </div>
        </div>
    )
}
export default News