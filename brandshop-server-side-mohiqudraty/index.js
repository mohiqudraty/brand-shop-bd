const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongo db -------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster10.suurwng.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // database and collections
    const database = client.db("brandShopDB");

    const productCollection = database.collection("products");
    const cartCollection = database.collection("carts");

    // POST  ----------------------
    // add product---
    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      // console.log(newProduct);
      const result = await productCollection.insertOne(newProduct);
      // console.log(result);
      res.send(result);
    });

    // add to cart
    app.post("/carts", async (req, res) => {
      const product = req.body;
      const result = await cartCollection.insertOne(product);
      res.send(result);
    });

    //Get ----------------------------------

    // get product for specific brand
    app.get("/products/:brandName", async (req, res) => {
      const brandName = req.params.brandName;
      const query = { brandName: brandName };
      const result = await productCollection.find(query).toArray();
      // console.log(query);
      res.send(result);
    });

    // get carts data-----------------
    app.get("/carts/:email", async (req, res) => {
      const email = req.params.email;

      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
      // console.log(email, query, result);
    });
    // delete cart item
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
      // console.log(result, query);
    });
    // update product-------------------------------------
    //get
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    // put
    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updateProduct = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedProduct = {
        $set: {
          image: updateProduct.image,
          name: updateProduct.name,
          brandName: updateProduct.brandName,
          type: updateProduct.type,
          price: updateProduct.price,
          rating: updateProduct.rating,
        },
      };

      const result = await productCollection.updateOne(
        filter,
        updatedProduct,
        options
      );
      res.send(result);
      console.log(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// test
app.get("/", (req, res) => {
  res.send("Brand shop BD Server Running");
});

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
