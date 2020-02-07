import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function loadOptions(inputValue, callback) {
  console.log('searching', inputValue);
  fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputValue.replace(/ /g, '+')}&limit=10`).then(r => r.json()).then(r => {
    callback(r.features.map(f => ({ label: f.properties.label, value: f })));
  });
};

const debLoadOptions = debounce(loadOptions, 300);

export class SearchPostalAddress extends Component {

  state = { selected: null, inputValue: this.props.address || '' };

  onChange = (selected) => {
    this.setState({ selected }, () => {
      if (this.props.onAddressSelected) {
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
        loadOptions={debLoadOptions}
        onInputChange={this.handleInputChange}
      />
    );
  }
}