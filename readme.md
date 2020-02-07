# <SearchPostalAddress />

## Install

```sh
yarn add https://github.com/mathieuancelin/search-postal-address
```

## Usage

```js
import { SearchPostalAddress } from 'search-postal-address';

function App(props) {
  return (
    <div>
      <h1>Recherchez une adresse</h1>
      <SearchPostalAddress address="38 rue de bellune NIORT" />
    </div>
  );
}
```

## API

proptypes:
s
  * `address: string` - plain text address that will be filled at first render
  * `onAddressSelected: function` - a function that will be called when an address is selected. The adress object will be passed ass unique parameter

address type:

```json
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":[
      2.290084,
      49.897443
    ]
  },
  "properties":{
    "label":"8 Boulevard du Port 80000 Amiens",
    "score":0.49159121588068583,
    "housenumber":"8",
    "id":"80021_6590_00008",
    "type":"housenumber",
    "name":"8 Boulevard du Port",
    "postcode":"80000",
    "citycode":"80021",
    "x":648952.58,
    "y":6977867.25,
    "city":"Amiens",
    "context":"80, Somme, Hauts-de-France",
    "importance":0.6706612694243868,
    "street":"Boulevard du Port"
  }
}
```

