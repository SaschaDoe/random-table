import { describe, it, expect } from 'vitest';
import { loadPlotTable } from './tables-loader';
import {Table} from "./table";
import {TableParser} from "./table-parser";

describe('table-parser', () => {
    it('parse disadvantage title', () => {
        const rawTable =
            `## Disadvantage Table
             ### evenly distributed`;

        let table = new TableParser().Parse(()=>rawTable);

        expect(table.title).toBe("Disadvantage Table");
    });

    it('parse plot title', () => {
        const rawTable =
            `## Plot Table
             ### evenly distributed`;

        let table = new TableParser().Parse(()=>rawTable);

        expect(table.title).toBe("Plot Table");
    });

    it('parse distribution', () => {
        const rawTable =
            `## Plot Table
             ### evenly distributed
             | Role | Name        | Description   `;

        let table = new TableParser().Parse(()=>rawTable);

        expect(table.distribution).toBe("evenly distributed");
    });
});
