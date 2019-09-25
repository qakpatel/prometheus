const LocalStorageHelper = {
	add: (key, value) => {
		if (!key) {
			return false;
		}
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	},
	get: (key, defaultVal = null) => {
		if (!key) {
			return defaultVal;
		}
		let data = localStorage.getItem(key);
		try {
			data = JSON.parse(data);
		} catch (e) {}
		return data ? data : defaultVal;
	},
	delete: key => {
		if (!key) {
			return false;
		}
		localStorage.removeItem(key);
		return true;
	}
};

export default LocalStorageHelper;
