/**
 * PublishToPowerBI publishes data to PowerBI. 
 * In this IPM, it is triggered when some data is published on DeviceData mqtt message topic
 * The payload structure is defined by the user when creating a dataset.
 * @param {string} body 
 * @example
 * 
 * req.params.body = [{
 *      "device":"device1",
 *      "temperature": 75.3488820272829,
 *      "acceleration": 5.883770230011185,
 *      "uvlight": 260.4664608184869
 *  }];
 */

function PublishToPowerBI(req, resp){
    var requestObject = Requests();
    
    var message = [];
    message.push(JSON.parse(req.params.body));
    
    var options = {
        url: POWER_BI_URL,
        body: message,
        header:{
            "Content-Type":"application/json"
        },
        strictSSL:false 
    };
    requestObject.post(options, function(err, r){
        if(err){
            // log("response "+err); //Uncomment for easier debugging
            resp.error(err);
        }
        else{
            // log("response "+r); //Uncomment for easier debugging
            resp.success(r);
        }
    });
}