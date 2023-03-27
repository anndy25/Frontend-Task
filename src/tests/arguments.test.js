import React from 'react';
import { render, screen } from '../test.utils';
import userEvent from "@testing-library/user-event";
import { Arguments } from '../components/Arguments';

describe('Arguments Component', () => {
    test('Argument renderes correctlyew', () => {
        render(
            <Arguments />
        );

        const textBox = screen.getByRole('textbox');
        expect(textBox).toBeInTheDocument();

        const comboBox = screen.getByRole('combobox');
        expect(comboBox).toBeInTheDocument();

        const addButton = screen.getByRole('button', { name: 'Add Args' });
        expect(addButton).toBeInTheDocument();

        const deleteButton = screen.getByTestId('delete-btn');
        expect(deleteButton).toContainHTML("<svg");


    });


    test("renders the argument list", () => {
        render(
            <Arguments />
        );

        const argumentList = screen.getAllByTestId('argument-list');
        expect(argumentList).toHaveLength(1);

    });

    test("double clicking the add button adds an argument", async () => {
        userEvent.setup();
        render(
            <Arguments />
        );
        const addButton = screen.getByRole('button', { name: /add args/i });
        await userEvent.dblClick(addButton);
        const argumentList = screen.getAllByTestId('argument-list');
        expect(argumentList).toHaveLength(3);


    })

    test("double clicking the add button adds an argument and remove argument by clicking on delete button", async () => {
        userEvent.setup();
        render(
            <Arguments />
        );

        const addButton = screen.getByRole('button', { name: /add args/i });
        const deleteButton = screen.getByTestId('delete-btn');

        await userEvent.dblClick(addButton);
        await userEvent.click(deleteButton)

        const argumentList = screen.getAllByTestId('argument-list');
        expect(argumentList).toHaveLength(2);

    })

    test("add arguments, updates arguments and theire state value", async () => {
        userEvent.setup();
        render(
            <Arguments />
        );

        const addButton = screen.getByRole('button', { name: /add args/i });
        await userEvent.click(addButton);

        const input = screen.getAllByRole("textbox");
        const comboBox = screen.getAllByRole('combobox');

        await userEvent.clear(input[0]);
        await userEvent.clear(input[1]);

        await userEvent.type(input[0], "abc");
        await userEvent.type(input[1], "xyz");

        await userEvent.selectOptions(comboBox[0], 'true');
        await userEvent.selectOptions(comboBox[1], 'false');

        expect(input[0]).toHaveValue("abc");
        expect(input[1]).toHaveValue("xyz");

        expect(comboBox[0]).toHaveValue('true');
        expect(comboBox[1]).toHaveValue('false');

    });



});
