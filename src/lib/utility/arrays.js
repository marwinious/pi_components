export function chunkArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += Number(chunkSize)) {
        chunkedArray.push(array.slice(i, i + Number(chunkSize)));
    }
    return chunkedArray;
}