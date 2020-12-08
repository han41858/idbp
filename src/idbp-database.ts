import { IDBPStore } from './idbp-store';
import { IDBPTransaction } from './idbp-transaction';


// IDBDatabase Promise wrapper
export class IDBPDatabase {

	constructor (private db : IDBDatabase) {

	}

	private _tx (storeName : string, option ? : 'readwrite' | 'readonly') : IDBTransaction {
		return this.db.transaction(storeName, option);
	}

	tx (storeName : string, option ? : 'readwrite' | 'readonly') : IDBPTransaction {
		return new IDBPTransaction(this._tx(storeName, option));
	}

	store (storeName : string) : Promise<IDBPStore> {
		return new Promise<IDBPStore>((resolve, reject) => {
			const tx : IDBTransaction = this._tx(storeName);

			return new IDBPStore(tx.objectStore(storeName));
		});
	}

}
