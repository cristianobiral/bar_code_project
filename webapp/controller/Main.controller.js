sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library) {
        "use strict";

        var urlHelper = library.URLHelper;

        return Controller.extend("barcodeproject.controller.Main", {
            onInit: function () {

            },

            onPressSeach: function() {
                alert('Searching...');
            },

            onClickImage: function(oEvent) {
                urlHelper.redirect(oEvent.getSource().getSrc(), true);
            }
        });
    });
