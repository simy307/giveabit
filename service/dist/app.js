"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client = new client_dynamodb_1.DynamoDBClient({});
const docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
var bodyParser = require('body-parser');
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use((0, cors_1.default)());
app.get('/profile/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const command = new lib_dynamodb_1.GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${(_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.email}`
        }
    });
    const response = yield docClient.send(command);
    res.send(response.Item);
}));
app.post('/profile/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const command = new lib_dynamodb_1.UpdateCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${(_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.email}`,
        },
        'UpdateExpression': "SET #attrName = :attrValue",
        'ExpressionAttributeNames': {
            '#attrName': 'amount'
        },
        'ExpressionAttributeValues': {
            ':attrValue': (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.amount,
        },
        'ReturnValues': "ALL_NEW"
    });
    const response = yield docClient.send(command);
    res.send(response);
}));
app.get('/payment_profile/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const command = new lib_dynamodb_1.GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `payment_profile-${(_d = req === null || req === void 0 ? void 0 : req.params) === null || _d === void 0 ? void 0 : _d.email}`
        }
    });
    const response = yield docClient.send(command);
    res.send(response);
}));
app.get('/requests', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const command = new lib_dynamodb_1.GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `requests`
        }
    });
    const response = yield docClient.send(command);
    res.send(response.Item);
}));
app.get('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const command = new lib_dynamodb_1.GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `categories`
        }
    });
    const response = yield docClient.send(command);
    res.send(response.Item);
}));
app.post('/category/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const command = new lib_dynamodb_1.UpdateCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${(_e = req === null || req === void 0 ? void 0 : req.params) === null || _e === void 0 ? void 0 : _e.email}`,
        },
        'UpdateExpression': "SET #attrName = list_append(if_not_exists(#attrName, :empty_list), :attrValue)",
        'ExpressionAttributeNames': {
            '#attrName': 'subscriptions'
        },
        'ExpressionAttributeValues': {
            ':attrValue': [(_f = req === null || req === void 0 ? void 0 : req.body) === null || _f === void 0 ? void 0 : _f.category],
            ':empty_list': []
        }
    });
    const response = yield docClient.send(command);
    res.send(response);
}));
app.delete('/category/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j, _k, _l;
    const getCommand = new lib_dynamodb_1.GetCommand({
        TableName: "hackmidwest2023",
        Key: {
            hackmidwest2023: `profile-${(_g = req === null || req === void 0 ? void 0 : req.params) === null || _g === void 0 ? void 0 : _g.email}`
        }
    });
    const category = (_h = req === null || req === void 0 ? void 0 : req.body) === null || _h === void 0 ? void 0 : _h.category;
    const getResponse = yield docClient.send(getCommand);
    let itemIndex;
    (_k = (_j = getResponse === null || getResponse === void 0 ? void 0 : getResponse.Item) === null || _j === void 0 ? void 0 : _j.subscriptions) === null || _k === void 0 ? void 0 : _k.forEach((item, index) => {
        if (item === category) {
            itemIndex = index;
        }
    });
    if (itemIndex !== undefined) {
        const command = new lib_dynamodb_1.UpdateCommand({
            TableName: "hackmidwest2023",
            Key: {
                hackmidwest2023: `profile-${(_l = req === null || req === void 0 ? void 0 : req.params) === null || _l === void 0 ? void 0 : _l.email}`,
            },
            'UpdateExpression': `REMOVE subscriptions[${itemIndex}]`,
        });
        const response = yield docClient.send(command);
        res.send(response);
    }
    else {
        res.sendStatus(200);
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map