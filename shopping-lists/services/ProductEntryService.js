import { executeQuery } from "../database/database.js";

//Adds a product into a specific list.
const createProductEntry = async (name, shopping_list_id) => {
  await executeQuery(
    `INSERT INTO shopping_list_items (name, shopping_list_id) VALUES ('${name}', '${shopping_list_id}');`
  );
};

  
  //Gets the products for a specific list.
  const findCurrentList = async (shopping_list_id) => {
    // deno-lint-ignore prefer-const
    let result = await executeQuery(
      `SELECT * FROM shopping_list_items WHERE shopping_list_id = '${shopping_list_id}' AND collected = FALSE ORDER BY name ASC;`
    );
    return result.rows;
  };

  //Gets the deleted/marked products in a list.
  const findCurrentListDeletedProducts = async (shopping_list_id) => {
    // deno-lint-ignore prefer-const
    let result = await executeQuery(
      `SELECT * FROM shopping_list_items WHERE shopping_list_id = '${shopping_list_id}' AND collected = TRUE ORDER BY name ASC;`
    );
    return result.rows;
  };

  //Marks/deletes a product from a specific list
  const finishProduct = async (id) => {
    await executeQuery(
      `UPDATE shopping_list_items SET collected = TRUE WHERE id = '${id}';`
    );
  };
  
  export {
    createProductEntry,
    findCurrentList,
    finishProduct,
    findCurrentListDeletedProducts,
  };