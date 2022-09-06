import * as firebaseFunctions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = firebaseFunctions.https.onRequest(
    (_, response) => {
        firebaseFunctions.logger.info("Hello logs!", {structuredData: true});
        response.send("Hello from Firebase!");
    }
);
