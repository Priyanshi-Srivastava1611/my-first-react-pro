import * as React from "react";
import {Drawer} from "@mui/material"
import MediaCard from "./componenst/MediaCard";

function HomeScreen() {
  return (
    <MediaCard
      image="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TN27632.jpg?v=1596123939"
      name="Bracelet"
      price="$35.00"
      description="Hey! everyonejjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjh
  jjjjjjjjjjjjjjjjjjjjj
  hhhhhhhhhhhhhhhhhhhhhhhhhhh
  mmmmmmmmmmmmmmmmmmm
  gggggggggggggggggggggggg
  hhhfhbhbfbfbhhhhhhhhhhhhhhhhhh
  
  
  vvvvvvvf
  
  
  
  ffff"
    />
  );
}

const Drawer = createDrawerNavigator();

export default function Responsive_d() {
  return (
    <Drawer anchor='left'>
  );
}
