import { serve } from "./deps.js";
import { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as shoppingListController from "./controllers/shoppingListController.js";
import * as productEntryController from "./controllers/productEntryController.js";
import * as mainPageController from "./controllers/mainPageController.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

//Serves as a mainpage / root for rest of the code.

//Routes the program according requested method and url
const handleRequest = async (request) => {
  const url = new URL(request.url);

  //Mainpage
  if (url.pathname === "/" && request.method === "GET") {
    return await mainPageController.showTotal();
  }
  //Add Shoppinglist to shoppinglists
  else if (url.pathname === "/lists" && request.method === "POST") {
    return await shoppingListController.addShoppingList(request);
  }
  //Show shoppinglists
  else if (url.pathname === "/lists" && request.method === "GET") {
    return await shoppingListController.viewShoppingLists(request);
  }
  //View a specific shoppinglist
  else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
    return await shoppingListController.viewShoppingList(request);
  } 
  //Deactivate / delete a shoppinglist
  else if (url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST") {
    return await shoppingListController.deleteShoppingList(request);
  } 
  //Delete / mark a product from a shoppinglist
  else if (url.pathname.match("lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST") {
    return await productEntryController.deleteProduct(request);
  }
  //Add product to a list
  else if (url.pathname.match("lists/[0-9]+/items") && request.method === "POST") {
    return await productEntryController.addProduct(request);
  } 
  
  else {
    return new Response("Not found", { status: 404 });
  }
};

let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

serve(handleRequest, { port: port });