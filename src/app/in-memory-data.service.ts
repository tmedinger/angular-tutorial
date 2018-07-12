import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: "Mr. Nice (this name is terrible)" },
            { id: 12, name: "Narco (this one is better but not great)" },
            { id: 13, name: "Bombasto (this one is also terrible)" },
            { id: 14, name: "Celeritas (bad)" },
            { id: 15, name: "Magneta (this one's pretty good)" },
            { id: 16, name: "RubberMan (so-so)" },
            { id: 17, name: "Dynama (ok)" },
            { id: 18, name: "Dr IQ (good for an annoyingly over confident smart hero)" },
            { id: 19, name: "Magma (good one)" },
            { id: 20, name: "Tornado (also a good one)" }
        ];
        return {heroes};
    }
}