import {expect, test } from 'vitest';
import {TableParser} from "./table-parser";

    test.each([
        [plotTableInput(), plotExpected()],
        [disadvantageTableInput(), disadvantageExpected() ],
    ])('parse %s', (
        rawTable,
        expected) => {

        let table = new TableParser().Parse(()=>rawTable);

        expect(table.title).toBe(expected[0]);
        expect(table.distribution).toBe(expected[1]);
    });

    function plotTableInput(){
        return `## Plot Table
         ### evenly distributed
         | Role | Name           | Description                                                                        | Example                                                                  |
         |:----:|:---------------|:-----------------------------------------------------------------------------------|--------------------------------------------------------------------------|
         |  1   | alien invasion | Show signs of it first, then indirect damage and only at the end the alien itself. | [War of the worlds](https://en.wikipedia.org/wiki/The_War_of_the_Worlds) |
         |  2   | no plot        | No coherent plot                                                                   |                                                                          |
         `;
    }

    function plotExpected(){
        return ["Plot Table", "evenly distributed"]
    }

    function disadvantageTableInput(){
        return `## Disadvantage Table
         ### evenly distributed
         | Role | Name        | Description             | Actions           |
         |:----:|:------------|:------------------------|-------------------|
         |  1   | Wanted from | The character is wanted | AnotherCharacter  |
         |  2   | Ugly        | Ugly mainly in the face |                   |`;
    }

    function disadvantageExpected(){
        return ["Disadvantage Table", "evenly distributed"];
    }