const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://goexplore_admin:Wasiimtiyaz1@goexplorecluster.2wn6ljx.mongodb.net/?appName=GoExploreCluster";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();