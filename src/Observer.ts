export interface IObserver<T> {
    id: string;
    update: (t: T) => void;
};
