import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import History from "sap/ui/core/routing/History";
import Router from "sap/ui/core/routing/Router";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import View from "sap/ui/core/mvc/View";

/**
 * @namespace de.albansberg.releaseplease.controller
 */
export default class BaseController extends Controller {
	/**
	 * Convenience method for accessing the component of the controller's view.
	 * @returns {sap.ui.core.Component} The component of the controller's view
	 */
	public getOwnerComponent(): UIComponent {
		return super.getOwnerComponent() as UIComponent;
	}

	/**
	 * Convenience method to get the components' router instance.
	 * @returns {sap.m.routing.Router} The router instance
	 */
	public getRouter(): Router {
		return UIComponent.getRouterFor(this);
	}

	public setAnswersToMyQuestions(): void {
		//bleibt leer
	}

	public gehJetztInsBett(): void {
		console.log("Ich gehe jetzt ins Bett!");
	}

	public getIntegerHandler(sPath: string): void {
		console.log(sPath);
	}

	public getHackerNews(): void {
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
	}

	public getSomeBreakingStuffDone(): void {
		console.log("I am doing something really important!");
	}

	/**
	 * Convenience method for getting the i18n resource bundle of the component.
	 * @returns {Promise<sap.base.i18n.ResourceBundle>} The i18n resource bundle of the component
	 */
	public getResourceBundle(): ReturnType<ResourceModel["getResourceBundle"]> {
		const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return oModel.getResourceBundle();
	}

	/**
	 * Convenience method for getting the view model by name in every controller of the application.
	 * @param {string} [sName] The model name
	 * @returns {sap.ui.model.Model} The model instance
	 */
	public getModel(sName?: string): Model | undefined {
		return (this.getView() as View).getModel(sName);
	}

	/**
	 * Convenience method for setting the view model in every controller of the application.
	 * @param {sap.ui.model.Model} oModel The model instance
	 * @param {string} [sName] The model name
	 * @returns {sap.ui.core.mvc.Controller} The current base controller instance
	 */
	public setModel(oModel: Model, sName?: string): this {
		(this.getView() as View).setModel(oModel, sName);
		return this;
	}

	/**
	 * Convenience method for triggering the navigation to a specific target.
	 * @public
	 * @param {string} sName Target name
	 * @param {object} [oParameters] Navigation parameters
	 * @param {boolean} [bReplace] Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
	 */
	public navTo(sName: string, oParameters?: object, bReplace?: boolean): void {
		this.getRouter().navTo(sName, oParameters, undefined, bReplace);
	}

	/**
	 * Convenience event handler for navigating back.
	 * It there is a history entry we go one step back in the browser history
	 * If not, it will replace the current entry of the browser history with the main route.
	 */
	public onNavBack(): void {
		const sPreviousHash = History.getInstance().getPreviousHash();
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("main", {}, undefined, true);
		}
	}
}
