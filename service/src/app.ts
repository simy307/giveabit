import express from 'express';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, QueryCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
import cors from 'cors';
const app = express();
const port = 3001;
var bodyParser = require('body-parser');

app.use(express.urlencoded());
app.use(express.json());
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

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

app.post('/profile/:email', async (req, res) => {
    const command = new UpdateCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${req?.params?.email}`,
        },
        'UpdateExpression' : "SET #attrName = :attrValue",
        'ExpressionAttributeNames' : {
            '#attrName' : 'amount'
        },
        'ExpressionAttributeValues' : {
            ':attrValue' : req?.body?.amount,
        },
        'ReturnValues': "ALL_NEW"
    });

    const response = await docClient.send(command);
    res.send(response);
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

app.post('/category/:email', async (req, res) => {
    const command = new UpdateCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${req?.params?.email}`,
        },
        'UpdateExpression' : "SET #attrName = list_append(if_not_exists(#attrName, :empty_list), :attrValue)",
        'ExpressionAttributeNames' : {
            '#attrName' : 'subscriptions'
        },
        'ExpressionAttributeValues' : {
            ':attrValue' : [req?.body?.category],
            ':empty_list': []
        }
    });

    const response = await docClient.send(command);
    res.send(response);
});

app.delete('/category/:email', async (req, res) => {
    const getCommand = new GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${req?.params?.email}`
        }
    });
    const category = req?.body?.category;
    const getResponse = await docClient.send(getCommand);
    let itemIndex;
    getResponse?.Item?.subscriptions?.forEach((item, index) => {
        if(item === category) {
            itemIndex = index;
        }
    })
    if(itemIndex !== undefined) {
        const command = new UpdateCommand({
            TableName: "hackmidwest2023",
            Key: {
                hackmidwest2023: `profile-${req?.params?.email}`,
            },
            'UpdateExpression': `REMOVE subscriptions[${itemIndex}]`,
        });

        const response = await docClient.send(command);
        res.send(response);
    } else {
        res.sendStatus(200);
    }
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});