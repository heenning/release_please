import BaseController from "./BaseController";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace de.albansberg.releaseplease.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	public saygoodNight(): void {
		MessageBox.show("Good Night World!");
	}

	public sayNoChanceToSleep(): void {
		MessageBox.show("No Chance to Sleep World!");
	}
}
