import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCard from "../Home/ProductsCard";
import { Grid } from "@mui/material";

export default function SingleAllData({
  id,
  lang,
  setLang,
  basket,
  setBasket,
}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://front-api.tamal.pro/api/v1/products?limit=100&offset=0&category_id=${id}`

        );
        return setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        gap={3}
        sx={{
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          width: "96%",
          margin: "0 auto",
          borderRadius: "8px",
          mt: 8,
        }}
      >
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <ProductsCard
            data={data}
            lang={lang}
            basket={basket}
            setBasket={setBasket}
          />
        </Grid>
      </Grid>
    </div>
  );
}
