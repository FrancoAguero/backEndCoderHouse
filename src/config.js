import { ServerApiVersion } from 'mongodb';
import 'dotenv/config';

export default {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
        client: { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
        cnxStr: `mongodb+srv://francoaguero98:${process.env.PASSWORD}@cluster0.l6kqa.mongodb.net/ecommerce?retryWrites=true&w=majority`
    },
    firebaseConfig: {
        type: "service_account",
        project_id: "coderhousebackend-85326",
        private_key_id: "448df3b787886721b4ce5810264a4a7832ea55a2",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCr+HKF9f+onMkS\n86IJTX3snwh6mDguvEZAvH0RYqFaIOfC31TUsrYa1cGVbVDo5JZUNhWNTKNzMcUI\njnJ2xuTweAqWa2s3B9bXtTOLCzD4ZkyS647lb5xopeZNjrVK4rTrYjP+NwJtjAQz\ngO6aSXrTIiBdM/nWKUN5gaemNWRo8xfuOvlkN96hXdzxwuJTwX8qOgEU/iNANqA9\nzvr3TzBoXDks0hMROw/d07Tg7IvunSxbpTkerWVT5M72YRxa/jn1RxY7swcD3QCV\nur/7u6ZVpmu7TD+U1kJtL2t1wLZHDx9xukoMmeUIhO9+nZedOGgqqU/l0V0o3l34\nvc5xEPwZAgMBAAECggEARkXJoqUyGhgrcHOfULbaUMFx6Qrf1nU4Lgb4Ao0vyxEs\nM60oUJxQnumfZ+zaRbj3FyVcrDdXiWCal9MBwjinX/5lsS7nCn9JEy9oBxcFJVRE\nUTsx0t7HZtn4INRCj/3RGWixP14CP3qaUuOKXQDO0I0e9YciPhnxiSrqs5gY1mtm\n25MhLdRPsDE2tuwxlNfm2s8s8m+NpRE0MRh/2VhUat/Re6UZ4kiDQNL0l5OLQGbU\n/JF7P4wMJx0rVYmQRwMVTSEm0X1YR1FUYAx2ynNu/TNcx3hUlvVwO8gMo9mSTwVS\noFvo1ckLDOWCpnWZnoUnimgQ1lMIw8J/8baYBL8kAwKBgQDwPDF7sDC8Io6zyLoY\nr1mG3qNoTBrHioFRse6eUIjUqZ3BtFLmupbgtYrd5wkM+FborK1m/uQkME0L9ezy\nJRr1WjjKAbAv/r6UCKM2G/hEFYI8hEe3fUnoIhpeJthCb84PVXdvNKcbDX2TgydR\nIHA+lOuhM5UTYBtjlTOVTVs42wKBgQC3QXLyFQBPLz6ESDGCgdI1ehRBN3bO29Oz\n3IaHqOZpofWCh/GRWzifsc0VGxYgu5b7uQn5t9O79DqM7tjCD/aG2oi8uP5uOcxs\nZQMEOlC4yeVBpsN9gxClNONK13ukucW4IDaqP12ejIiPmPFL8JbCi7jODSsnCxXo\nK/eaIOwHGwKBgEM7RUntTCZKsY8k/NfNswtooWid69yuKXTYjAQoW7LQaUL9mTnT\nPEhU5jEl6EWF9qSVNs4dRXHPRrCzOYWm1r2Va1E1Wb6E14cMR8jr2PYM4u7Wwk9a\ns+VQLfrtehZVveBSteMcZCvRAbTXvpgYsPECslLh4bWTbvbWmaIODRqDAoGAEQGv\n6ytrxe16fcg9YAEwQuo7avn8uqHH+c8jZP+VsoPnRt/a2UR/8sILaEQFP7BpCJ9Z\nf6VBrxWxQVcBIrFcjZNGUU1Rv2T5xa1yJDhNOXjzH66cQc+iAdLwrQdmYBklcjr7\nF72dsJMWMU1eR0/ijddtpSGvuYXb2JoL9m/Lt7UCgYEAiTtPqvnAEgNvm2FSPyaY\naBxMANGSWlCqqvx7acCKsOEtJ+D+nPIvEd6vGEz6HnFWlek2esAD8K++KuX9rHtr\nJfOkbf6u2lIkEwlQU2B14K9lVzfZYgQpvHJgMIxTKEJSuF3ZqN4XED3p5fIU9S5G\nnD0xney2yF6MajNnOjTj3fk=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-asq0t@coderhousebackend-85326.iam.gserviceaccount.com",
        client_id: "106995522926625260444",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-asq0t%40coderhousebackend-85326.iam.gserviceaccount.com"
    },
    FileSystem: {
        path: './DB'
    }
}