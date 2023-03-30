/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bar_code_project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
