
// //  Load the two different direction the chain can go.
// //
let list = require("./routing/list");

// //
// //	This lambda is a proxy between our browser and Google Maps.
// //
exports.handler = (event) => {

    return new Promise(function (resolve, reject) {

        //
        //  >>> Always log the event content for ease debugging in development.
        //
        console.log(JSON.stringify(event, null, 4));

        //
        //	1.	Create a container to be passed in the chain
        //
        let container = {
            //
            //	Broken down all the data that we need to visually see what
            //	this Lambda uses.
            //
            req: {
                function: event.function,
                payload: event.payload
            },
            //
            //	The default response for Lambda.
            //
            res: {
                message: "ok",
                data: []
            }
        };

        //
        //	2.	Start the chain
        //
        routing(container)
            .then(function (container) {

                //
                //  ->  Send back the good news.
                //
                return resolve(container.res);

            })
            .catch(function (error) {

                //
                //  1.  Show the logs to the developer.
                //
                console.error(error);

                //
                //	->	Stop and surface the error.
                //
                return reject({
                    message: "error",
                    data: error.message
                });

            });
    });
};

//	 _____   _____    ____   __  __  _____   _____  ______   _____
//	|  __ \ |  __ \  / __ \ |  \/  ||_   _| / ____||  ____| / ____|
//	| |__) || |__) || |  | || \  / |  | |  | (___  | |__   | (___
//	|  ___/ |  _  / | |  | || |\/| |  | |   \___ \ |  __|   \___ \
//	| |     | | \ \ | |__| || |  | | _| |_  ____) || |____  ____) |
//	|_|     |_|  \_\ \____/ |_|  |_||_____||_____/ |______||_____/
//

//
//  This is where we decided which part of the code to execute, and which one
//  to skip.
//

function routing (container) {

    return new Promise(function (resolve, reject) {

        console.info("routing");

        if (container.req.function == "list")
        {
            list(container)
                .then(function (container) { return resolve(container); })
                .catch(function (error) { return reject(error); });
        }

    });

}
