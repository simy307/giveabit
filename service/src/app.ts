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
    const command = new GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `requests`
        }
    });

    const response = await docClient.send(command);
    res.send(response.Item);
});

app.get('/categories', async (req, res) => {
    const command = new GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `categories`
        }
    });

    const response = await docClient.send(command);
    res.send(response.Item);
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});