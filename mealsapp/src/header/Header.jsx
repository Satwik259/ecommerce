
import "./header.css"
import { Badge, Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = ({setOpen,cart}) => {
    
    const handleOpen = () => setOpen(true);

    return (
        <div className='head-styles'>

            <span className="heading">SHOPPING STORE</span>


        <div className="input-header">
        <input type="text" placeholder="Search Anything" style={{width: "550px" , height: "40px",borderRadius:"12px",fontWeight:"bold",fontSize:"24px"}}/>
        </div>

            <IconButton  aria-label="cart" onClick={()=>handleOpen()}>
                <Badge badgeContent={cart.length} color="secondary" >
                <Button>
                <ShoppingCartIcon className="cart-icon" />
                </Button>
                </Badge>
            </IconButton>

        </div>
 

    )
}

export default Header