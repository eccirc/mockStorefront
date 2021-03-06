interface ServiceInit {
    status: 'init';
}
interface ServiceLoading {
    status: 'loading';
}
interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
}
interface ServiceError {
    status: 'error';
    error: Error;
}

//union type of the above interfaces
export type ProductService<T> = ServiceInit | ServiceLoading | ServiceLoaded<T> | ServiceError;
