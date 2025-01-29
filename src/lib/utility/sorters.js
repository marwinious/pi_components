export function sortArrayOfObjects(data, sortKey, sortDirection) {
    const sortedData = [...data].sort((a, b) => {
        const valueA = a[sortKey]
        const valueB = b[sortKey]

        // Use localeCompare for strings, otherwise subtract for numbers
        const comparison = 
            typeof valueA === 'string' && typeof valueB === 'string'
                ? valueA.localeCompare(valueB, undefined, { numeric: true })
                : Number(valueA) - Number(valueB);

        return sortDirection === "asc" ? comparison : -comparison;
    })

    return sortedData;
}