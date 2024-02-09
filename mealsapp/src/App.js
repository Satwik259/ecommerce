import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Filters from "./filters/Filters";
import Allproducts from "./allproducts/Allproducts";
import "./App.css";
import { Box, Modal } from "@mui/material";

const App = () => {
  const [originalData, setOriginalData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [open, setOpen] = useState(false);
  //const[shelf,setShelf]=useState([])
  const [cart, setCart] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setOriginalData(data);
    setDuplicateData(data);
    const allproducts = data.map((item) => {
      return item.category;
    });
    const uniq = [...new Set(allproducts)];
    setCategories(uniq);
    // console.log(categories)
  };
  useEffect(() => {
    getData();
  }, []);

  const onCategoryChange = (item, isChecked) => {
    if (isChecked) {
      setCategoryFilters([...[item], ...categoryFilters]);
      // console.log(categoryFilters)
    } else {
      const updatedList = categoryFilters.filter(
        (singleitem) => item !== singleitem
      );
      setCategoryFilters(updatedList);
    }
  };

  const onAddToCartClick = (item) => {
    if (cart.includes(item)) {
      item.quantity += 1;
      // setCart([...cart, item])
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };
  // console.log(`after addtocart ${JSON.stringify(cart)}`);

  const onGoClick = (min, max) => {
    const res = originalData.filter((sample) => {
      return sample.price >= min && sample.price <= max;
    });
    setPriceFilter(res);
  };

  useEffect(() => {
    if (categoryFilters.length > 0) {
      const displayProducts = originalData.filter((prod) =>
        categoryFilters.includes(prod.category)
      );
      setDuplicateData(displayProducts);
    } else {
      setDuplicateData(originalData);
    }
  }, [categoryFilters]);

  useEffect(() => {
    setDuplicateData(priceFilter);
  }, [priceFilter]);

  const onProdInc = (singleitem) => {
    let add = cart.map((pro) => {
      //console.log(`id ${Id}`);
      if (pro == singleitem) {
        pro.quantity += 1;
      }
      return pro;
    });
    setCart(add);
  };

  const onProdDec = (singleitem) => {
    let dec = cart.map((pro) => {
      //console.log(`id ${Id}`);
      if (pro == singleitem) {
        pro.quantity -= 1;
      }
      return pro;
    });
    setCart(dec);
  };
  //alert()

  return (
    <div>
      <Header setOpen={setOpen} cart={cart} />
      <div className="set-correctly">
        <Filters
          duplicatedata={duplicateData}
          categorrry={categories}
          onCategoryChange={onCategoryChange}
          ongouse={onGoClick}
        />
        <Allproducts
          info={originalData}
          duplicatedata={duplicateData}
          onaddtocarttoclick={onAddToCartClick}
          pricefilter={priceFilter}
        />
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              {cart.map((singleitem) => {
                return (
                  <>
                    <div>
                      <img
                        className="bomms"
                        src={singleitem.image}
                        alt="Prod-bomma"
                      />
                      <h1>{singleitem.title}</h1>
                      <p>{singleitem.price}</p>
                      <h1 onClick={() => onProdInc(singleitem)}>+</h1>
                      <h2>{singleitem.quantity}</h2>
                      <h1 onClick={() => onProdDec(singleitem)}>-</h1>
                    </div>
                  </>
                );
              })}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default App;
