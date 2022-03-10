import React from 'react';
import { Provider } from "react-redux"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {store} from "./redux/store"

import "bootstrap/dist/css/bootstrap.min.css";

import { CategoryList } from "./component/category/CategoryList";


import { Header } from "./component/common/Header";
import { PageNotFound } from "./component/common/PageNotFound";

const App: React.FC = () => {
  return (      
          <Provider store={store}>
            <BrowserRouter>
              <Header />
                <div className="container">
                  <Routes>
                    <Route path="/" element={<CategoryList />} />                    
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </div>
            </BrowserRouter>
          </Provider>
  );
}

export default App;
