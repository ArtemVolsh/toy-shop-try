import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ShoppingBasket } from "@mui/icons-material";

function Header({ handleCart, orderLen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          color="white"
          variant="h6"
          component="span"
          sx={{ flexGrow: 1 }}
        >
          Toy Shop
        </Typography>
        <IconButton color="inherit" onClick={handleCart}>
          <Badge badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
