import { describe, it, expect, test } from 'vitest';
import {TableParser} from "./table-parser";

    const disadvantageTable =
        `## Disadvantage Table
         ### evenly distributed
         | Role | Name        | Description   `;

    const plotTable =
        `## Plot Table
         ### evenly distributed
         | Role | Name        | Description   `;

    test.each([
        [plotTable, "Plot Table", "evenly distributed"],
        [disadvantageTable, "Disadvantage Table", "evenly distributed"],
    ])('parse %s', (
        rawTable,
        title,
        distribution) => {

        let table = new TableParser().Parse(()=>rawTable);

        expect(table.title).toBe(title);
        expect(table.distribution).toBe(distribution);
    });
