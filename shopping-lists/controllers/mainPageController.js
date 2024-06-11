// deno-lint-ignore-file
import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as mainPageService from "../services/mainPageService.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  };

  //Shows total amount of shoppinglists and products.
const showTotal = async (request) => {
  
    const data = {
      list: await mainPageService.ShowAmountLists(),
      products: await mainPageService.ShowAmountProducts(),
    };
    return new Response(await renderFile("mainPage.eta", data), responseDetails);
  };

export {showTotal}


