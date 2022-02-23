import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "100%",
        }}
      >
        <CardMedia
          image={poster}
          component="img"
          alt={name}
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Ціна: {price} грн.</Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Придбати
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
