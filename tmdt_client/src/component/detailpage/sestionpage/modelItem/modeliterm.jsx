import { useSelector,useDispatch } from "react-redux"
import { add_shoping_cart,xoa_cart,DecreaseQuantity,IncreaseQuantity } from "../../../action/addcart"
const ModelItem = () => {
    const sanpham=useSelector(state=>state.shoping.Cart)
    const dispatch=useDispatch()
    return (
        <div className="modelitem">
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                Launch
            </button>

            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Thêm thành công sản phẩm nhé</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {sanpham}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModelItem

