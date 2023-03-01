import { PeopleAlt } from "@mui/icons-material"
import { TextField } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material";
const NavBar = () => {
    const navigation=useNavigate()
    const hello = () => {
        navigation("/login")
    }
    return (
        <div className="nav-bar" style={{ alignItems: "center" }}>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="/home">PUG HOTPAG</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/product">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/supporst">Hỗ trợ khách hàng</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/new">Tin tức mới nhất</a>
                        </li>
                    </ul>
                </div>
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                    style={{
                        width: "35%",
                        marginLeft: "10px"
                    }}
                />
                <IconButton onClick={hello} color="primary" aria-label="h1j" component="h">
                    <PeopleAlt color="white" />
                </IconButton>
                <IconButton onClick={()=>navigation("/shopingcart")} color="primary" aria-label="upload picture" component="label">
                    <AddShoppingCartIcon />
                </IconButton>

            </nav>
        </div>
    )
}
export default NavBar