import "../footerpage/footer.css"
const FooterPage=()=>{
    const list=[
        {

        }
    ]
    return(
        <div className="footer-page col-sm-12 row" style={{
            
        }}>
            <div className="footer-left col-sm-4">
                    <p>
                        Rất chi là wellcome bạn ghé thăm trang web nhé.Mong bạn mua sản phẩm ủng hộ chúng tôi
                        để phát triển và hoàn thiện hơn nhé 
                    </p>
                    <p>
                        Liên hệ với fb này để ủng hộ chúng tôi <a href="">Facebook</a>
                    </p>
            </div>
            <div className="footer-center col-sm-4">
                    <h1>Tạm thời viết vậy đi nhé chưa nghĩ ra cái cần viết</h1>
            </div>
            <div className="footer-right col-sm-4">
                    <h1>Thông tin liên hệ</h1>
                    <div className="footer-contact">
                        <li>Họ và tên người tạo:Nguyễn Văn Dương</li>
                        <li>SDT:0338629576</li>
                        <li>Địa Chỉ:Thôn Đại Trường Hoằng TRường</li>
                        <li>Bạn có ý kiến gì thì nhập vào trong này</li>
                        <div class="form-group">
                          <label for="">Nhập ý kiến muốn đóng góp</label>
                          <textarea class="form-control" name="" id="" rows="3"></textarea>
                          <label htmlFor=""></label>
                          <input name="" id="" class="btn btn-primary" type="button" value="Send"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default FooterPage