import { render, screen } from "@testing-library/react";
import { ProductItem } from "./product-item";
import userEvent from "@testing-library/user-event";

describe("product item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <ProductItem
        product={{ id: "1", name: "name", description: "description" }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Delete"));

    expect(onDelete).toHaveBeenCalled();
  });
});
