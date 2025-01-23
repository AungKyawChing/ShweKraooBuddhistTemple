const fundTableBody = document.getElementById('fundTableBody');

let fundBalance = 0;

const data = [
    { date: `2021-12-31`, time: "16:30", reason: 'As Much Money as there was in 2021', url: 'transactions/2021-fund.json', cost: +1000 },
    { date: `2022-01-04`, time: "13:15", reason: 'Rebuild room Project Budget', url: 'transactions/rebuild-room.json', cost: -200 },
    { date: `2022-01-18`, time: "18:00", reason: 'Wall Setup Project Budget', url: 'transactions/wall-setup.json', cost: -500 },
    { date: `2022-01-23`, time: "10:30", reason: 'Return From Rebuild Room Project', url: 'transactions/rebuild-room-return.json', cost: +50 },
    { date: `2022-01-29`, time: "09:30", reason: 'Return From Wall Setup Project', url: 'transactions/wall-setup-return.json', cost: +100 },
];

data.forEach(item => {
    const row = document.createElement('tr');
    fundBalance += item.cost;
    row.innerHTML = `
        <td>${item.date}<br>${item.time}</td>
        <td><a href="${item.url}">${item.reason}</a></td>
        <td>${item.cost}</td>
        <td>${fundBalance}</td>
    `;
    fundTableBody.prepend(row);
});