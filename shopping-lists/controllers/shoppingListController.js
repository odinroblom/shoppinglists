// deno-lint-ignore-file
import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as ShoppingListService from "../services/ShoppingListService.js";
import * as ProductEntryService from "../services/ProductEntryService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

//Add a shoppingList to lists
const addShoppingList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");
  
  //Function for checking that name is not NULL. Cancels the possibility of adding a list with no name.
  if(name){
    await ShoppingListService.createShoppingList(name);
  }
  return requestUtils.redirectTo("/lists");
};

//View a specific shoppingList
const viewShoppingList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    list: await ShoppingListService.findById(urlParts[2]),
    products: await ProductEntryService.findCurrentList(urlParts[2]),
    deletedProducts: await ProductEntryService.findCurrentListDeletedProducts(urlParts[2]),
  };
  return new Response(await renderFile("shoppingList.eta", data), responseDetails);
};

//View all shoppinglists
const viewShoppingLists = async (request) => {
  const data = {
    lists: await ShoppingListService.ShowShoppingLists(),
  };
  return new Response(await renderFile("shoppingLists.eta", data), responseDetails);
};

//Delete a shoppingList
const deleteShoppingList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await ShoppingListService.deleteById(urlParts[2]);

  return requestUtils.redirectTo("/lists");
};


export { viewShoppingLists, viewShoppingList, addShoppingList, deleteShoppingList };