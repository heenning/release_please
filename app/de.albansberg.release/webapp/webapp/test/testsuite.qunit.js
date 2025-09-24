sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: de.albansberg.releaseplease",
		defaults: {
			page: "ui5://test-resources/de/albansberg/releaseplease/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "de/albansberg/releaseplease/",
				never: "test-resources/de/albansberg/releaseplease/"
			},
			loader: {
				paths: {
					"de/albansberg/releaseplease": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for de.albansberg.releaseplease"
			},
			"integration/opaTests": {
				title: "Integration tests for de.albansberg.releaseplease"
			}
		}
	};
});
