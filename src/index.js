import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';

function loadOptions(inputValue, callback) {
  console.log('searching', inputValue);
  fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputValue.replace(/ /g, '+')}&limit=10`).then(r => r.json()).then(r => {
    console.log(r.features) //.map(f => f.label));
    callback(r.features.map(f => ({ label: f.properties.label, value: f })));
  });
};

export class SearchPostalAddress extends Component {

  state = { selected: null, inputValue: this.props.address || '' };

  onChange = (selected) => {
    this.setState({ selected }, () => {
      if (this.props.onAddressSelected) {
        console.log(selected);
        this.props.onAddressSelected(selected);
      }
    });
  };

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return (
      <AsyncSelect
        placeholder="Tapez une adresse (pas trop fort) ..."
        defaultValue={this.state.inputValue}
        inputValue={this.state.inputValue}
        onChange={this.onChange}
        loadOptions={loadOptions}
        onInputChange={this.handleInputChange}
      />
    );
  }
}