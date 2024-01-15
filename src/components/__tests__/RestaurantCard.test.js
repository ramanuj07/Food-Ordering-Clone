import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should test RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Jalandhar Sweets");

  expect(resName).toBeInTheDocument();
});
