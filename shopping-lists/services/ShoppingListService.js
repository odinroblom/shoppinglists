import { executeQuery } from "../database/database.js";

//Creates a shoppinglist to the database.
const createShoppingList = async (name) => {
  await executeQuery(
    `INSERT INTO shopping_lists (name) VALUES ('${name}');`
    );
};

//Gets shoppingLists from the database. 
const ShowShoppingLists = async () => {
  const result = await executeQuery(
    `SELECT * FROM shopping_lists WHERE active = TRUE ORDER BY id ;`,);
  return result.rows;
};

//Fins a specific shoppinglist with the ID, returns only the specific row. 
const findById = async (id) => {
  // deno-lint-ignore prefer-const
  let result = await executeQuery(`SELECT * FROM shopping_lists WHERE id = '${id}';`);
  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }

  return { id: 0, name: "Unknown" };

};

//Deletes a shoppingList by setting active = FALSE.
const deleteById = async (id) => {
  await executeQuery(
    `UPDATE shopping_lists SET active = FALSE WHERE id = '${id}';`
  );
};


export { createShoppingList, ShowShoppingLists, deleteById, findById };