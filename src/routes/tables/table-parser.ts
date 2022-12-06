import {Table} from "./table";

export const NewLine = "\n";

export class TableParser {
    private endOfFirstLine = 0;
    private title = "";
    private distribution = "";

    Parse(loadFunction: Function){
        let rawLogs = loadFunction();

        this.ParseTitle(rawLogs);
        this.ParseDistribution(rawLogs);

        return new Table()
            .WithTitle(this.title)
            .WithDistribution(this.distribution);
    }

    private ParseTitle(rawLogs: string) {
        this.endOfFirstLine = rawLogs.indexOf(NewLine);
        this.title = rawLogs.slice(3, this.endOfFirstLine);
    }

    private ParseDistribution(rawLogs: string) {
        let endOfSecondLine = rawLogs.indexOf(NewLine, this.endOfFirstLine + 1);
        let distributionBeginning = rawLogs.indexOf("###") + 4;
        this.distribution = rawLogs.slice(distributionBeginning, endOfSecondLine);
    }


}