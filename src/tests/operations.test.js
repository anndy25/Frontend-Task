import React from 'react';
import { render, screen } from '../test.utils';
import userEvent from "@testing-library/user-event";


import App from '../App';

describe("App Components", () => {
    test("should show the options when the select element is clicked", async() => { 
        userEvent.setup();
        render(<App />)

        const generalOption=screen.getByTestId('general-options');
        expect(generalOption).toBeInTheDocument();
        
        await userEvent.selectOptions(generalOption, 'Constant');
        const argumentOption=screen.getByTestId('constant-options');
        expect(argumentOption).toBeInTheDocument();
        
        const constantDelete=screen.getByTestId('constant-delete-btn');
        await userEvent.click(constantDelete)
        
        const generalOption2=screen.getByTestId('general-options');
        expect(generalOption2).toBeInTheDocument();

    })

    test("show 'Constant' expression result",async()=>{
        userEvent.setup();
        render(<App />)

        const generalOption=screen.getByTestId('general-options');
        expect(generalOption).toBeInTheDocument();
        
        await userEvent.selectOptions(generalOption, 'Constant');

        const constantOption=screen.getByTestId('constant-options');
        expect(constantOption).toBeInTheDocument();
        
        await userEvent.selectOptions(constantOption, 'true');
        const resultTrue=screen.getByText(/Result : true/)
        expect(resultTrue).toBeInTheDocument();

        await userEvent.selectOptions(constantOption, 'false');
        const resultFalse=screen.getByText(/Result : false/)
        expect(resultFalse).toBeInTheDocument();

    })

    test("show 'Argument' expression result",async()=>{
        userEvent.setup();
        render(<App />)

        const addButton = screen.getByRole('button', { name: /add args/i });
        await userEvent.click(addButton);

        const inputs = screen.getAllByDisplayValue("My Args");
        const comboBox = screen.getAllByRole('combobox');

        await userEvent.clear(inputs[0]);
        await userEvent.clear(inputs[1]);

        await userEvent.type(inputs[0], "abc");
        await userEvent.type(inputs[1], "xyz");

        await userEvent.selectOptions(comboBox[0], 'true');
        await userEvent.selectOptions(comboBox[1], 'false');


        const generalOption=screen.getByTestId('general-options');
        expect(generalOption).toBeInTheDocument();
        
        await userEvent.selectOptions(generalOption, 'Argument');

        const argumentOption=screen.getByTestId('argument-options');
        expect(argumentOption).toBeInTheDocument();
        
        await userEvent.selectOptions(argumentOption, 'abc');

        const resultTrue=screen.getByText(/Result : true/)
        expect(resultTrue).toBeInTheDocument();

        await userEvent.selectOptions(argumentOption, 'xyz');

        const resultFalse=screen.getByText(/Result : false/)
        expect(resultFalse).toBeInTheDocument();

    })

    test("show 'Logical Operation' result",async()=>{
        userEvent.setup();
        render(<App />)

        const generalOption=screen.getByTestId('general-options');
        expect(generalOption).toBeInTheDocument();
        
        await userEvent.selectOptions(generalOption, 'Logical Operation');

        const logicalOption=screen.getByTestId('logical-operations');
        expect(logicalOption).toBeInTheDocument();

        await userEvent.selectOptions(logicalOption, 'and');

        const generalOptions=screen.getAllByTestId('general-options');
        expect(generalOptions).toHaveLength(2);
        

        await userEvent.selectOptions(generalOptions[0], 'Constant');
        await userEvent.selectOptions(generalOptions[1], 'Constant');

        const resultFalse=screen.getByText(/Result : false/)
        expect(resultFalse).toBeInTheDocument();

        
        const constantOptions=screen.getAllByTestId('constant-options');
        expect(constantOptions).toHaveLength(2);

        await userEvent.selectOptions(constantOptions[0], 'true');
        await userEvent.selectOptions(constantOptions[1], 'true');

        const resultTrue=screen.getByText(/Result : true/)
        expect(resultTrue).toBeInTheDocument();


    })



})




