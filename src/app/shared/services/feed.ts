import { Timestamp } from 'rxjs';

export interface Daily {
    date?: Timestamp<any>;
    level?: number;
    note?: string;
}
