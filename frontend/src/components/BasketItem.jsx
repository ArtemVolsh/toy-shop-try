import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Close } from "@mui/icons-material";

const BasketItem = ({ removeFromOrder, id, name, price, quantity }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price} грн. x{quantity}
      </Typography>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
