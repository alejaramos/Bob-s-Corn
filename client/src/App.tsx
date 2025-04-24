import React from 'react';
import HomescreenView from "./views/homescreen/components/homescreen.view.tsx";
import { ClientProvider } from './contexts/ClientContext.tsx';

function App() {
  return (
    <ClientProvider>
      <div>
        <HomescreenView />
      </div>
    </ClientProvider>
  );
}

export default App;