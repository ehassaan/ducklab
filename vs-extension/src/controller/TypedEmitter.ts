

interface CallbackSubscription<T> {
    callback: (event: T) => any;
    id: number;
}

export class TypedEmitter<T = any> {

    private _subscriptions: CallbackSubscription<T>[] = [];
    private _counterSub = 0;
    private _dispose: CallbackSubscription<number>[] = [];  // subscriptions for dispose event
    private _counterDis = 0;

    public emit(event: T) {
        for (let cb of this._subscriptions) {
            cb.callback(event);
        }
    }

    public on(callback: (event: T) => any) {
        this._counterSub++;
        this._subscriptions.push({ callback, id: this._counterSub });
        let counter = this._counterSub;
        return () => {
            let idx = this._subscriptions.findIndex(e => e.id === counter);
            this._subscriptions.splice(idx, 1);
        };
    }

    onDispose(callback: (code: number) => any) {
        this._dispose.push({ callback, id: this._counterSub++ });
        let counter = this._counterDis;
        return () => {
            let idx = this._dispose.findIndex(e => e.id === counter);
            this._dispose.splice(idx, 1);
        };
    }

    public dispose(code: number = 0) {
        for (let cb of this._dispose) {
            try {
                cb.callback(code);
            }
            catch (e) {
                console.error("Error in dispose: ", e);
            }
        }
        this._dispose = [];
    }
}
