export function chunkArray(array, chunkSize) {
    return array.reduce((acc, _, index) => {
        if (index % chunkSize === 0) {
            acc.push(array.slice(index, index + chunkSize));
        }
        return acc;
    }, []);
}