import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppThemeDefault from "./Theme";
import { HashRouter } from "react-router-dom";
import Layouts from "./Layouts";
import RootReducer from "./Modules/RootReducer";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(RootReducer, applyMiddleware(thunk));
ReactDOM.render(
	<MuiThemeProvider theme={AppThemeDefault}>
		<Provider store={store}>
			<HashRouter>
				<Layouts />
			</HashRouter>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById("root")
);
