// This would be your 'userData' variable in the component using lt-table
const sampleTableData = [
    {
        id: 101,
        name: 'Alice Wonderland',
        email: 'alice@example.com',
        status: 'active', // This will be styled by the custom render function
        registered: '2023-01-15T10:00:00Z', // Date string to be formatted
        department: 'Marketing'
    },
    {
        id: 102,
        name: 'Bob Builder',
        email: 'bob@example.com',
        status: 'pending', // Different status for styling
        registered: '2023-02-28T14:30:00Z',
        department: 'Operations'
    },
    {
        id: 103,
        name: 'Charlie Chaplin',
        email: 'charlie@example.com',
        status: 'active',
        registered: '2023-03-05T09:15:00Z',
        department: 'HR'
    },
    {
        id: 104,
        name: 'Diana Prince',
        email: 'diana@example.com',
        status: 'inactive', // Another status for styling
        registered: '2022-11-01T11:00:00Z',
        department: 'IT'
    },
    {
        id: 105,
        name: 'Eve Adams',
        email: 'eve@example.com',
        status: 'active',
        registered: '2024-04-10T16:45:00Z',
        department: 'Marketing'
    }
];

// And your column definitions (as shown in the previous explanation)
const customTableColumns = [
    { key: 'id', header: 'User ID' },
    { key: 'name', header: 'Full Name' },
    {
        key: 'status',
        header: 'Account Status',
        render: (item) => html`
            <span class="${item.status === 'active' ? 'text-green-600' : item.status === 'pending' ? 'text-yellow-600' : 'text-red-600'}
                         font-semibold p-1 px-2 rounded-full text-xs uppercase"
                  style="background-color: ${item.status === 'active' ? '#d4edda' : item.status === 'pending' ? '#fff3cd' : '#f8d7da'};">
                ${item.status}
            </span>
        `
    },
    {
        key: 'registered',
        header: 'Member Since',
        render: (item) => {
            const date = new Date(item.registered);
            return html`${date.toLocaleDateString()}`; // Formats the date
        }
    },
    {
        key: 'department',
        header: 'Department'
    },
    {
        key: 'actions', // This column will only use its render function, as 'actions' key might not exist in data
        header: 'Actions',
        render: (item) => html`
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors duration-200"
                @click=${() => console.log('Edit user:', item.id, item.name)}
            >
                Edit
            </button>
            <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm ml-2 transition-colors duration-200"
                @click=${() => alert(`Deleting user: ${item.name}`)}
            >
                Delete
            </button>
        `
    }
];

// Then, in your Lit component's render method, you'd use it like this:
// html`
//     <lt-table .data="${sampleTableData}" .columns="${customTableColumns}" striped compact></lt-table>
// `;