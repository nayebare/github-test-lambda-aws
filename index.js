//end aws async
exports.handler = async (event, context) => {

    // give to the developer
    // arn: hellow-world
    // success { data: '345-uhfkk', status: 200 }
    // failure {status":201, "data":"data failed to be retreived"}
    // console.log(context)

    promise_return_hotel_id(event)
        .then(function (event) {
            console.log("room name");
            return promise_return_hotel_room(event);
        })
        //   .then(function(event)=>{
        //   console.log(("hotel id"))
        //     return event
        // })
        .catch((error) => {
            console.log(error);
        });
};


// firstRequest()
//   .then(function(response) {
//     return secondRequest(response);
// }).then(function(nextResponse) {
//     return thirdRequest(nextResponse);
// }).then(function(finalResponse) {
//     console.log('Final response: ' + finalResponse);
// }).catch(failureCallback);

//promises promises

function promise_return_hotel_id (event) {
    let error_msg = {
        "data": "hotel id failed to be retreived"
    };
    return new Promise((resolve, reject) => {
        if (event) {
            console.log(event.hotel_id);
            resolve(event.hotel_id);
        }
        else {
            reject(error_msg);
        }

    });
}

//function return rooms
function promise_return_hotel_room (event) {
    // {
    //      "data":event.hotel_id,
    //      "status": 200
    //      }
    // {
    let error_msg = {

        "data": "room data failed to be retreived"
    };
    return new Promise((resolve, reject) => {
        if (event) {
            console.log(event.hotel_name);
            resolve(event.hotel_name);
        }
        else {
            reject(error_msg);
        }

    });
}


