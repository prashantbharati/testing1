import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe("this is to check the custom build fuctions",()=>{

    
    test("chehckinfg my csutom build test function",()=>{

        // Arrange
    
        render(<Greeting/>)
    
        // Act
        // .. nothing
    
        // Assert
        const handlemycase= screen.getAllByText("Thank you")
        expect(handlemycase).toBeInTheDocument();
    
    })

    test("to check the completed false case",()=>{
        
        render(<Greeting/>)

        const handlecase=screen.getByText('Hey this is before case',{exact:false})
        expect(handlecase).toBeInTheDocument();

    })

})

