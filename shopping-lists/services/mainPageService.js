import { executeQuery } from "../database/database.js";

//Counts the amount of lists in the database.
const ShowAmountLists = async () => {
    const result = await executeQuery(
      "SELECT COUNT(*) FROM shopping_lists;");
    return result.rows[0];
  };

  //Counts the amount of products in the database.
const ShowAmountProducts = async () => {
    const result = await executeQuery(
      "SELECT COUNT(*) FROM shopping_list_items;");
    return result.rows[0];
  };

  export {ShowAmountLists, ShowAmountProducts}