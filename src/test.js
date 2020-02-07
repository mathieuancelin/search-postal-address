import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { SearchPostalAddress } from './index';

function TestApp() {
  const [found, setFound] = useState(null);
  const onAddressSelected = addr => setFound(addr);
  return (
    <div>
      <SearchPostalAddress address="38 rue de bellune" onAddressSelected={onAddressSelected} />
      {found && (
        <pre>{JSON.stringify(found, null, 2)}</pre>
      )}
    </div>
  );
}
ReactDOM.render(<TestApp /> , document.getElementById('app'));