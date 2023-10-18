import React, { useState } from "react";

const OnChangeInputValidation = (props) => {
  const [itemCode, setItemCode] = useState(false);
  const [itemName, setItemName] = useState(false);
  const [buyPrice, setBuyPrice] = useState(false);
  const [sellPrice, setSellPrice] = useState(false);
  const [itemStok, setItemStok] = useState(false);
  const [sellerName, setSellerName] = useState(false);
  const [expiredDate, setExpiredDate] = useState(false);

    let numb = new RegExp('[0-9]')

  if (props.name === "itemCode" && props.value.length < 5) {
    setItemCode(true);
  } else if( props.name === "itemName" && props.value.trim().length === 0){
    setItemName(true);
  } else if(props.name === "buyPrice" && props.value !== numb){
    setBuyPrice(true)
  } else if(props.name === "sellPrice" && props.value !== numb){
    setSellPrice(true)
  } else if(props.name === "itemStok" && props.value !== numb){
    setItemStok(true)
  } else if(props.name === "sellerName" && props.value.trim().length === 0){
    setSellerName(true)
  } else if(props.name === "expiredDate" && props.value !== numb){
    setExpiredDate(true)
  }

  props.onValid(itemCode, itemName, buyPrice, sellPrice, itemStok, sellerName, expiredDate) 
};

const OnAddItemValidation = (props) => {};

export { OnChangeInputValidation, OnAddItemValidation };
