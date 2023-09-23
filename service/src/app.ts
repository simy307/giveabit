import express from 'express';
const app = express();
const port = 3001;

app.get('/profile', (req, res) => {
    res.send({
        first_name: 'John',
        last_name: 'Whitman'
    });
});

app.get('/profile', (req, res) => {
    res.send({
        email: 'simy307@gmail.com',
        first_name: 'John',
        last_name: 'Whitman'
    });
});

app.get('/payment_profile', (req, res) => {
    res.send({
        email: 'simy307@gmail.com',
        payment_id: 31251231235,
        payment_info: [{type: 'Credit',primary: true, number: 3123412332137687, cvv: 432, expiration_date: '12/23'},
            {type: 'Debit', primary: false,number: 9121786534529078, cvv: 775, expiration_date: '11/23'},
            {type: 'ACH',primary: false, routing_number: 54353463423, account_number: 23154123314}]
    });
});

app.get('/requests', (req, res) => {
    res.send([
        {
            type: "Utility",
            name: "Mary Newman",
            city: "Kansas City",
            state: "Missouri",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis mattis magna, a tincidunt eros bibendum nec. Nullam euismod nec augue at pulvinar. In metus urna, porttitor et congue at, finibus quis lorem. Suspendisse ac elementum tortor. Sed eu posuere neque, et egestas turpis. Praesent vel neque maximus, dictum leo vitae, imperdiet ipsum. Sed eleifend molestie ex vehicula cursus. Duis ac velit facilisis, blandit ex ac, rhoncus turpis. Aenean vulputate arcu a dapibus tempus. Suspendisse sed arcu congue sapien commodo egestas. Curabitur ut diam eu mauris interdum accumsan. Morbi pellentesque id libero at condimentum.",
        },
        {
            type: "Food",
            name: "Berry Polzin",
            city: "Chicago",
            state: "Illinois",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis mattis magna, a tincidunt eros bibendum nec. Nullam euismod nec augue at pulvinar. In metus urna, porttitor et congue at, finibus quis lorem. Suspendisse ac elementum tortor. Sed eu posuere neque, et egestas turpis. Praesent vel neque maximus, dictum leo vitae, imperdiet ipsum. Sed eleifend molestie ex vehicula cursus. Duis ac velit facilisis, blandit ex ac, rhoncus turpis. Aenean vulputate arcu a dapibus tempus. Suspendisse sed arcu congue sapien commodo egestas. Curabitur ut diam eu mauris interdum accumsan. Morbi pellentesque id libero at condimentum.",
        },
        {
            type: "Repair",
            name: "Mary Newman",
            city: "Sante Fe",
            state: "New Mexico",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis mattis magna, a tincidunt eros bibendum nec. Nullam euismod nec augue at pulvinar. In metus urna, porttitor et congue at, finibus quis lorem. Suspendisse ac elementum tortor. Sed eu posuere neque, et egestas turpis. Praesent vel neque maximus, dictum leo vitae, imperdiet ipsum. Sed eleifend molestie ex vehicula cursus. Duis ac velit facilisis, blandit ex ac, rhoncus turpis. Aenean vulputate arcu a dapibus tempus. Suspendisse sed arcu congue sapien commodo egestas. Curabitur ut diam eu mauris interdum accumsan. Morbi pellentesque id libero at condimentum.",
        },
    ]);
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});