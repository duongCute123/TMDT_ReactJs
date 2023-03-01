import { PeopleAlt } from "@mui/icons-material"
import { TextField } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
const NavBar = () => {
    const [query, setTimkiem] = useState("")
    const navigation = useNavigate()
    const [list,setList]=useState([])
    const quantity=useSelector(state=>state.shoping.numberCart)
    console.log(quantity);
    const hello = () => {
        navigation("/login")
    }
    // useEffect((e)=>{
    //     axios.get(`http://localhost:8000/getProduct&query=${e.target.value}`)
    //     .then(res=>{
    //         console.log(res.data);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // },[])
    const Handchang = (e) => {
        setTimkiem(e.target.value)
        axios.get("http://localhost:8000/getProduct")
        .then(res=>{
            setList(res.data)
        })
    }
    console.log(list.filter(item=>item.tenSp.toLowerCase().includes(list)));
    return (
        <div className="nav-bar" style={{ alignItems: "center" }}>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <Link class="navbar-brand" to="/home">PUG HOTPAG</Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/product">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/supporst">Hỗ trợ khách hàng</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/new">Tin tức mới nhất</Link>
                        </li>
                    </ul>
                </div>
                <TextField
                    name="timkiem"
                    value={query}
                    id="standard-search"
                    label="Search field"
                    type="search"
                    onChange={Handchang}
                    variant="standard"
                    style={{
                        width: "35%",
                        marginLeft: "10px"
                    }}
                />
                <IconButton onClick={hello} color="primary" aria-label="h1j" component="h">
                    <PeopleAlt color="white" />
                </IconButton>
                <IconButton onClick={() => navigation("/shopingcart")} color="primary" aria-label="upload picture" component="label">
                    <span><AddShoppingCartIcon />{quantity}</span>
                </IconButton>

            </nav>
        </div>
    )
}
export default NavBar