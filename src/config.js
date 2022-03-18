import { ServerApiVersion } from 'mongodb';

export default {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
        client: { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
        cnxStr: `mongodb+srv://francoaguero98:${process.env.PASSWORD}@cluster0.l6kqa.mongodb.net/ecommerce?retryWrites=true&w=majority`
    },
    FileSystem: {
        path: './DB'
    }
}