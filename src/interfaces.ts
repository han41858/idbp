export interface Config {
	debug? : boolean;
}

export type IDBPKey = number | string | Date | BufferSource | IDBPKey[];
