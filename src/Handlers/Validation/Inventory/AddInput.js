const AddInput = (props) => {
  const iCodePattern = new RegExp("^[\bK]");

  if (!props.itemCode) {
    props.inputValidation(true);
    return alert(
      `Item Code field cannot be empty & min length is five character`
    );
  }
  if (props.itemCode !== iCodePattern) {
    return alert('Item Code must begin with "K" character');
  }
}

export default AddInput