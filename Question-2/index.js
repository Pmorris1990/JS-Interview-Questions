// const axios = require('axios');

// 2. Rewrite the below function to replace the promise chain with async/await.

async function promiseChainReplacement (pathParam) {
    // Maybe add the below variables to the method parameters instead, but maybe not...
    //  const userInfo = {oneId, twoId, name};

    try{
        // Imitation of get request using axios...
        const respOne = await axios.get(`https://api.visionpoint.systems/one/${pathParam}`);
        const {oneId, name} = respOne;
        console.log(respOne.data);
        const respTwo = await axios.get(`https://api.visionpoint.systems/two/${oneId}`);
        const {twoId} = respOne;
        console.log(respTwo.data);
        const respThree = await axios.get(`https://api.visionpoint.systems/three/${twoId}`);
        console.log(respThree.data);

        // Possibly replace variables oneId, twoId, and name with userInfo...

        // maybe do Promise.all() here instead of return???

        return oneId, twoId, respThree?.threeId, name, respThree?.value;

    } catch (err) {
        console.log(err);
        console.log("There was an error! Please contact administrator.")
    }
}

promiseChainReplacement(`https://api.visionpoint.systems/`);