/**
 * @namespace de.albansberg.releaseplease.model
 */
const formatter = {
	formatValue(value: string): string | undefined {
		return value && value.toUpperCase();
	}
};

export default formatter;
