import { test, expect } from "@playwright/test";

test("create delete product list", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("/");
  await page.getByPlaceholder("name...").click();
  await page.getByPlaceholder("name...").fill("Test product");
  await page.getByPlaceholder("description...").click();
  await page.getByPlaceholder("description...").fill("Test description");
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByText("Test productTest descriptionDelete").click();
  await expect(
    page.getByText("Test productTest descriptionDelete"),
  ).toBeVisible();

  await page.getByRole("button", { name: "Delete" }).click();

  await expect(
    page.getByText("Test productTest descriptionDelete"),
  ).not.toBeVisible();
});
