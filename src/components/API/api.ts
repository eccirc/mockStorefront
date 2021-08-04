export const getItems = (): Promise<string | any> => {
    return fetch('https://mockend.com/eccirc/mockStorefront/products')
        .then((res) => res)
        .catch((error) => {
            console.log(error);
        });
};
