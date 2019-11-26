import React from "react";
import { stringify } from "querystring";
import WelcomeMessage from './Settings/WelcomeMessage';
import '../css/App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from './Settings';
import Content from './Shared/Content';

export default class App extends React.Component {      
    render() {
      return (  
            <AppLayout>
              <AppProvider>
                <AppBar/>
                  <Content>                  
                    <Settings/>
                  </Content>                
              </AppProvider>
            </AppLayout>
      );
    }
  }


// export default App;
