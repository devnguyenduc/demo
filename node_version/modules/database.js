import Frame from "./frame.js";
import Data from "./data.js";
export default class DataBase extends Frame {
    constructor() {
        super();
        this.db = null;
        this.db_url = "";
        this.db_db = null;
        this.collection = null;
        this.client = require("mongodb").MongoClient;
        this.isclient = false;
    }

    set_url(url = "") {
        this.db_url = url;
    }

    get_url() {
        return this.db_url;
    }

    set_cols(collection) {
        this.collection = collection;
    }

    get_cols() {
        return this.collection;
    }

    connect() {
        this.client.connect(this.get_url(), { useNewUrlParser: true }, (err, result) => {
            if (err) {
                console.log(err);
                this.isclient = false;
                return this.ERROR(err);
            } else {
                this.db = result;
                this.isclient = true;
                return "Connect DataBase successful !!!";
            }
        });

    }
    disconnect() {
        try {
            if (this.db != null) {
                this.db.close();
                console.log("Disconnect Database succesful.")
                return "Disconnect Database succesful.";
            } else {
                console.log("Have not connect database yet !")
                return "Have not connect database yet !";
            }
        } catch (e) {
            return this.ERROR(e);
        }
    }

    async search_one(obj) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.collection).findOne(obj, (err, result) => {
                if (err) {
                    return this.ERROR(err);
                } else {
                    return result;
                }
            });

        } catch (e) {
            return this.ERROR(e);
        }
    }

    async search(list_obj) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.get_cols()).find(list_obj).toArray((err, result) => {
                if (err) {
                    return this.ERROR(err);
                } else {
                    // the result behide is the array with list_obj to find
                    return result;
                }
            })
        } catch (e) {
            return this.ERROR(e);
        }
    }

    async create_one(obj) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.collection).insertOne(obj, (err, result) => {
                if (err) {
                    return this.ERROR(err);
                } else {
                    return result;
                }
            })
        } catch (e) {
            return this.ERROR(e);
        }
    }

    async create(list_obj) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.get_cols()).create(list_obj, (err, result) => {
                if (err) {
                    return this.ERROR(err);
                } else {
                    return "Number of documents inserted: " + result.insertedCount;
                }
            })

        } catch (e) {
            return this.ERROR(e);
        }
    }

    async update_one(what_update, how_update) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.get_cols()).updateOne(what_update, how_update, (e, result) => {
                if (e) {
                    return this.ERROR(e);
                } else {
                    return result;
                }
            })

        } catch (e) {
            return this.ERROR(e);
        }
    }

    async update(what_update, list_update) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.get_cols()).update(what_update, list_update, (e, result) => {
                if (e) {
                    return this.ERROR(e);
                } else {
                    return result;
                }
            })
        } catch (e) {
            return this.ERROR(e);
        }
    }

    async remove(what) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.collection(this.get_cols()).deleteOne(what, (e, result) => {
                if (e) {
                    return this.ERROR(e);
                } else {
                    return "Remove file successful.";
                }
            })
        } catch (e) {
            return this.ERROR(e);
        }
    }

    async create_collection(new_collection = new String()) {
        try {
            let dbo = await this.db.db(this.db_db);
            dbo.createColeection(new_collection, (err, result) => {
                if (err) {
                    return this.ERROR(err);
                } else {
                    return "Create Collection successful.";
                }
            })
        } catch (e) {
            return this.ERROR(e);
        }
    }
}
