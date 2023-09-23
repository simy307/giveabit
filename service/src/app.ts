import express from 'express';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const app = express();
const port = 3001;


app.get('/profile/:email', async (req, res) => {
    const command = new GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${req?.params?.email}`
        }
    });

    const response = await docClient.send(command);
    res.send(response.Item);
});

app.get('/payment_profile/:email', async (req, res) => {
    const command = new GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `payment_profile-${req?.params?.email}`
        }
    });

    const response = await docClient.send(command);
    res.send(response);
});

app.get('/requests', async (req, res) => {
    /*res.send([
        {
            type: "Utility",
            name: "Mary Newman",
            city: "Kansas City",
            state: "Missouri",
            amount: 100.00,
            by_date: "4/22/2023",
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
    ]);*/
    const command = new GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `requests`
        }
    });

    const response = await docClient.send(command);
    res.send(response.Item);
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});