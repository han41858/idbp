export class IDBPTransaction {

	constructor (private tx : IDBTransaction) {
	}

	abort () : void {
		this.tx.abort();
	}

}
