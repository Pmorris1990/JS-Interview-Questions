// 3. Rewrite the getPayment function to avoid the deferred anti-pattern

function getPayment(user) {
    // …assume logic here to obtain bearer token and stored in variable ‘token’
    
    const URL = 'https://api.visionpoint.systems/';
    const token = 'Bearer '.concat(USER_TOKEN);   

   // Imitation of get request for user token using axios...
    axios.get(URL, { "headers" : { "Authorization" : token } })
    .then((res => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    }));

}

function getPaymentDetails(token) {
    // …some async processing so this returns a promise that resolves once complete
    }

    // async function attempt
async function processPaymentInfo() {
        try{
            const response =  await getPayment(exampleUser);
            console.log("Payment Received");
            const ProcessedResp = await getPaymentDetails(response);
            console.log(ProcessedResp);
        }
        catch (err) {
            console.log(err);
            console.log("There was an error! Please contact administrator.");
        }
    }
// async function call
processPaymentInfo();

