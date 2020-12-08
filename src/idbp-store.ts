import { IDBPKey } from './interfaces';


// IDBObjectStore Promise wrapper
export class IDBPStore {

	constructor (private store : IDBObjectStore) {
	}

	async add<T> (data : T, key : IDBPKey) : Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const addReq : IDBRequest = this.store.add(data, key);

			addReq.onerror = () => {
				reject(addReq.error);
			};

			addReq.onsuccess = () => {
				resolve(addReq.result as T);
			};
		});
	}

	async get<T> (id : any) : Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const getReq : IDBRequest = this.store.get(id);

			getReq.onerror = () => {
				reject(getReq.error);
			};

			getReq.onsuccess = () => {
				resolve(getReq.result as T);
			};
		});
	}

	async keys (key : IDBPKey, count? : number) : Promise<string[]> {
		return new Promise<string[]>((resolve, reject) => {
			const getAllKeysReq : IDBRequest = this.store.getAllKeys(key, count);

			getAllKeysReq.onerror = () => {
				reject(getAllKeysReq.error);
			};

			getAllKeysReq.onsuccess = () => {
				resolve(getAllKeysReq.result as string[]);
			};
		});
	}

}
