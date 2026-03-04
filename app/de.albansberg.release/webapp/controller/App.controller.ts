import BaseController from "./BaseController";
import Component from "../Component";
import View from "sap/ui/core/mvc/View";

/**
 * @namespace de.albansberg.releaseplease.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		(this.getView() as View).addStyleClass((this.getOwnerComponent() as Component).getContentDensityClass());
	}
}
