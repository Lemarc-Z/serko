import React 				from 'react';
import 						'./App.css';
import { MuiThemeProvider, 
		 createMuiTheme } 	from '@material-ui/core/styles';
// AuthStack
import SignupCard 			from '../AuthStack/SignupCard';


const theme 	= createMuiTheme ({
		palette: {
				primary: {
						main: '#006ba9'
				}
				}
		},
)

function App () {
		return (
				<MuiThemeProvider theme={theme}>
						<div className="App">
								<SignupCard />
						</div>
				</MuiThemeProvider>
		);
}

export default App;
