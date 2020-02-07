import React, { useState } from 'react';
import { SearchPostalAddress } from './index';

export default { title: 'SearchPostalAddress' };

export const empty = () => <SearchPostalAddress />;

export const withAddress = () => (
  <SearchPostalAddress address="38 rue de bellune" />
);

export const withCallback = () => {
  const [found, setFound] = useState(null);
  const onAddressSelected = addr => setFound(addr);
  return (
    <div>
      <SearchPostalAddress address="Avenue thomas edison" onAddressSelected={onAddressSelected} />
      {found && (
        <pre>{JSON.stringify(found, null, 2)}</pre>
      )}
    </div>
  );
};