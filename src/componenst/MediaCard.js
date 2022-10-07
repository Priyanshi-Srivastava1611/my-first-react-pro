import * as React from "react";
//import styles from "./index.abd15969.css";
import styles from "./MediaCard.module.css";

//import { Grid } from "@mui/material";
//import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function MediaCard(props) {
  const { image, name, price, description } = props;
  return (
    <div className={styles.active}>
      <div className={styles.revo_embed_product_description_drawer_data}>
        <div className="revo-embed-close-product-drawer">
          <div className={styles.product_heading}>
            <h3>Products</h3>
          </div>
        </div>
        <div className={styles.revo_embed_image_and_description_parent}>
          <div className={styles.image_brief_details}>
            <div className={styles.surround_border}>
              <img className={styles.revo_image} src={image} />
            </div>
            <div className={styles.revo_name_price}>
              <h4>{name}</h4>
              <p>{price}</p>
            </div>
          </div>
          <h2 className={styles.revo_description}>Description</h2>
          <div className={styles.revo_product_description}>
            <p>{description}</p>
          </div>
        </div>
        <button className={styles.revo_add_button} onclick="">
          ADD TO CART
        </button>
        <button className={styles.revo_go_button} onclick="">
          GO TO CART
        </button>
      </div>
    </div>

    /*<Card
      sx={{
        maxWidth: 345,

        position: "absolute",
        marginLeft: 50,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product
        </Typography>
        <CardMedia
          style={{ height: 175, width: 175, margin: "15px auto" }}
          component="img"
          image="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TN27632.jpg?v=1596123939"
          alt=""
        />
        <div className="describe price and name">
          <h4 text-align="centre">Bracelet</h4>
          <p>$35.00</p>
        </div>
        <h2 className="description">Description</h2>
        <Typography
          variant="body2"
          color="text.secondary"
          overflowY="scroll"
          style={{ Width: 345, height: 60, overflowY: "auto" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica fhc dd gdg
          vvcvvc vcvcvc vccvvvvv vvvvvvvvv vvvvvv vv vvvv vvvvvvvvvvvv
          vvvvvvvvvvv v v v v v variantvv v v v variantvvv v v variant variant
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "Black", width: "100%" }}
          position="centre"
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>*/
  );
}
