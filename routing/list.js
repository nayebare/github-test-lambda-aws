//
//	List all the restaurants of a selected place.
//
module.exports = function (container) {

    return new Promise(function (resolve, reject) {

        //
        //	->	Start the chain.
        //
        step_1(container)
            .then(function (container) {

                return step_2(container);

            })
            .then(function (container) {

                return resolve(container);

            })
            .catch(function (error) {

                return reject(error);

            });

    });
};

//	 _____    _____     ____    __  __   _____    _____   ______    _____
//	|  __ \  |  __ \   / __ \  |  \/  | |_   _|  / ____| |  ____|  / ____|
//	| |__) | | |__) | | |  | | | \  / |   | |   | (___   | |__    | (___
//	|  ___/  |  _  /  | |  | | | |\/| |   | |    \___ \  |  __|    \___ \
//	| |      | | \ \  | |__| | | |  | |  _| |_   ____) | | |____   ____) |
//	|_|      |_|  \_\  \____/  |_|  |_| |_____| |_____/  |______| |_____/
//

//
//	Query Google Maps to get a list of restaurants in the selected location.
//
function step_1 (container)
{
    return new Promise(function (resolve, reject) {

        console.info(" > step_1");

        //
        //	->	Move to the next chain.
        //
        return resolve(container);

    });
}

//
//  Filter the result that Google Maps sent back, and only keep the information
//  that we care about, since Google returns way more than what we need.
//
function step_2 (container) {

    return new Promise(function (resolve, reject) {

        console.info(" > step_2");

        //
        //	->	Move to the next chain.
        //
        return resolve(container);

    });

}
