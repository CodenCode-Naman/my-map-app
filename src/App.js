import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import OSMMap from './components/OSMMap';
import store from './store';

function App() {
  return (
    <Provider store={store}>
  
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="map-container">
            {/* <FormInput /> */}
          <OSMMap />
             {/* <RegionInfo /> */}
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
