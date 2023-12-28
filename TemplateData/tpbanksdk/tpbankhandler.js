var partnerHandler = new function () {
    var RequestTPB = {
        version_platform: "1.0",
        event: "",
        checksum: "",
        vendorID: "",
        deviceCode: "",
        userToken: "",
        transactionID: "",
        providerCode: "",
        serviceCode: "",
        invoice: "",
        amount: "",
        transactionDesc: "",
        payload: ""
    }

    // subscriber data from web
    window.addEventListener('message', function(event) {
        tpbanksdk.updateFromNative(event.data)
    });


    this.updateFromDataNative = function(message) {
            // TODO process data received from native and web tpbank
            console.log("web data ==> " + message)
    }

    this.updateVerifyResponse = function(message) {
            // TODO process data received from native and web tpbank
    }

    this.updateConfirmResponse = function(message) {
            // TODO process data received from native and web tpbank

    }

    this.setPlatform = function(message) {
            // TODO process data received from native and web tpbank
            console.log(message)
            document.getElementById("myspan").textContent = message
    }

    this.sendDataForNative = function(window,event) {
        RequestTPB.transactionDesc = "gia tri url"
        RequestTPB.amount = "121212"
        RequestTPB.event = event
        tpbanksdk.sendMessage(window,RequestTPB)
    }

}


