import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("chehckinfg my csutom build test function",()=>{

    // Arrange

    render(<Greeting/>)

    // Act
    // .. nothing

    // Assert
    const handlemycase= screen.getAllByText("Thank you")
    expect(handlemycase).toBeInTheDocument;

})