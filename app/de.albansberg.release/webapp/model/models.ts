import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
import Device from "sap/ui/Device";

/**
 * @namespace de.albansberg.releaseplease.model
 */
const models = {
	createDeviceModel(): JSONModel {
		const oModel = new JSONModel(Device);
		oModel.setDefaultBindingMode(BindingMode.OneWay);
		return oModel;
	}
};

export default models;
