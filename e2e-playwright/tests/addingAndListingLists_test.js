import { assert } from "https://deno.land/std@0.191.0/testing/asserts.ts";
import { viewShoppingLists } from "../../shopping-lists/controllers/shoppingListController.js";
import { createShoppingList } from "../../shopping-lists/services/ShoppingListService.js";
import { load } from "https://deno.land/std@0.191.0/dotenv/mod.ts";

const env = await load();

Deno.test("Add Shopping List and assert it is added to the database", async () => {
  console.log(env);
  const expectedValue = "testName";
    await createShoppingList(expectedValue);
  const arr = await viewShoppingLists();
    assert(arr.includes(expectedValue))
});

// I didn't get the test to work but this describes the overall structure of the tests.
