import { IObserver } from './Observer';

export interface ISubject<T> {
    observers: Array<IObserver<T>>;
    notify: (t: T) => void;
    addObserver: (o: IObserver<T>) => void;
    removeObserver: (o: IObserver<T>) => void;
};