import { Config } from './interfaces';

import { IDBPDatabase } from './idbp-database';


export class IDBP {

	private readonly log : (...msg : any[]) => void;
	private readonly idbEnable : boolean;


	constructor (config? : Config) {
		this.log = config?.debug
			? (...msg : any[]) : void => {
				console.warn(`idb: `, msg);
			}
			: () => {
			};


		this.idbEnable = !window?.indexedDB;

		if (!this.idbEnable) {
			console.warn('not support IndexedDB');
		}
	}

	async db (name : string, version? : number) : Promise<IDBPDatabase | undefined> {
		let db : IDBPDatabase | undefined;

		if (this.idbEnable) {
			db = await new Promise<IDBPDatabase>((resolve, reject) => {
				const openReq : IDBOpenDBRequest = window.indexedDB.open(name, version);

				openReq.onerror = (event : Event) => {
					this.log('onerror', event);

					reject(openReq.error);
				};

				openReq.onupgradeneeded = (event : Event) => {
					this.log('onupgradeneeded', event);
				};

				openReq.onsuccess = (event : Event) => {
					this.log('onsuccess', event);

					reject(new IDBPDatabase(openReq.result));
				};
			});
		}

		return db;
	}

}
