import * as requestUtils from "../utils/requestUtils.js";
import * as ProductEntryService from "../services/ProductEntryService.js";


//adds a product to a specific list.
const addProduct = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const formData = await request.formData();
  const name = formData.get("name");

  //Checks that name is not NULL. Cancels the possibility of adding a product with no name.
  if(name){
    await ProductEntryService.createProductEntry(name, urlParts[2]);
  }

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

//Deletes a product from a specific list
const deleteProduct = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await ProductEntryService.finishProduct(urlParts[4]);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

export { 
  addProduct,
  deleteProduct
};