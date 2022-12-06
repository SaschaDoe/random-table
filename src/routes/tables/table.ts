export class Table {
    title: string;
    distribution: string;
    name: string;
    description: string;
    actionStrings: string[];

    constructor() {

        this.title = "Default title";
        this.distribution = "";
        this.name = "";
        this.description = "";
        this.actionStrings = [];
    }

    WithTitle(title: string){
        this.title = title;
        return this;
    }


    WithDistribution(distribution: string) {
        this.distribution = distribution;
        return this;
    }
}