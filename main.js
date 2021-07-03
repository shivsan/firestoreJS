const admin = require("firebase-admin")

const path = require("path");

admin.initializeApp({
    credential: admin.credential.cert("./firebase-credentials.json")
})

const firestore = admin.firestore()

writeToFirestore();

function writeToFirestore() {
    firestore
        .collection("test")
        .doc("new")
        .set({"id": 1})
        .then((result, err) => console.log(result))

}
