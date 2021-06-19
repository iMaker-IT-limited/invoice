import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("iMaker invoice 2021!", { structuredData: true });
    response.send("Hello from iMaker invoice 2021!");
});

// onUpdateRevenue
// onUpdateOverdue
// onProfit

// export const updateProfit = functions.firestore
//     .document("{userID}/Invoices/Invoices/{invoiceID}")
//     .onCreate(async (event) => {
//         const eventdata = event.data();
//         if (eventdata) {
//             //  const uid = event.id;
//             const total = eventdata["Total"];
//             console.log(total);
//             return;
//         } else {
//             return null;
//         }
//     });

export const sumofReceivable = functions.firestore
    .document("{userID}/Invoices/Invoices/{invoiceID}")
    .onCreate(async (event) => {
        const eventdata = event.data();
        if (eventdata) {
            const status = eventdata["Estimate Status"];
            const total = eventdata["Total"];
            const invoicerID = eventdata["Invoicer Id"];
            const uid = event.id;
            console.log(status, total, uid);
            // refer to the parent document
            // if status is 'invoiced'
            const db = admin.firestore();
            const summationRef = db
                .collection(`${invoicerID}/Invoices/Invoices`)
                .where("Estimate Status", "==", "invoiced");
            const invoiced = await summationRef.get();
            /* eslint-disable @typescript-eslint/no-explicit-any*/
            const invoicedArr: any[] = [];
            // loop over document
            invoiced.forEach((result) => {
                const estimatetotal = result.data().Total;
                invoicedArr.push(estimatetotal);
            });
            const totalReceivable = invoicedArr.reduce(myFunc);
            if (totalReceivable) {
                console.log("total receivable is : ", totalReceivable);
                const totalReceivableRef = db
                    .collection(`${invoicerID}`)
                    .doc("Receivables");
                return totalReceivableRef.set({
                    totalReceivable: totalReceivable
                });
            } else {
                console.log("no total receivable");
            }
            return;
        } else {
            return null;
        }
        function myFunc(total: number, num: number) {
            return total + num;
        }
    });

export const sumofProfit = functions.firestore
    .document("{userID}/Invoices/Invoices/{invoiceID}")
    .onUpdate(async (event) => {
        const eventdata = event.after.data();
        if (eventdata) {
            const status = eventdata["Estimate Status"];
            const total = eventdata["Total"];
            const invoicerID = eventdata["Invoicer Id"];
            const uid = eventdata.id;
            console.log(status, total, uid);
            // refer to the parent document
            // if status is 'invoiced'
            const db = admin.firestore();
            const summationRef = db
                .collection(`${invoicerID}/Invoices/Invoices`)
                .where("Estimate Status", "==", "paid");
            const invoiced = await summationRef.get();
            /* eslint-disable @typescript-eslint/no-explicit-any*/
            const invoicedArr: any[] = [];
            // loop over document
            invoiced.forEach((result) => {
                const estimatetotal = result.data().Total;
                invoicedArr.push(estimatetotal);
            });
            const totalProfit = invoicedArr.reduce(myFunc);
            if (totalProfit) {
                console.log("total profit is : ", totalProfit);
                const totalReceivableRef = db
                    .collection(`${invoicerID}`)
                    .doc("Profit");
                return totalReceivableRef.set({
                    totalProfit: totalProfit
                });
            } else {
                console.log("no total profit");
            }
            return;
        } else {
            return null;
        }
        function myFunc(total: number, num: number) {
            return total + num;
        }
    });
// export const onUpdateReceivables = functions.firestore
//     .document("{userID}/Invoices/Invoices/")
//     .onUpdate(async (event) => {
//         // const val = snapshot.val();
//         // const aftereventData = event.data();
//         const eventdata = event.after.data();
//         const uid = event.after.id;
//         console.log(eventdata, uid);
//     });