import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar2.css';

// Sample data for suggestions
const suggestions = [
  { name: 'Apple' },
  { name: 'Banana' },
  { name: 'Cherry' },
  { name: 'Date' },
  { name: 'Fig' },
  { name: 'Grape' },
  { name: 'Honeydew' },
];

// Function to get suggestions based on user input
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestions.filter(
        (suggestion) =>
          suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// Function to get suggestion value to be displayed in the input
const getSuggestionValue = (suggestion) => suggestion.name;

// Function to render each suggestion
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestionsList, setSuggestionsList] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionsList(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  const inputProps = {
    placeholder: 'Search a service',
    value,
    onChange,
  };

  return (
    <Autosuggest
    style={{ padding: '10px', marginRight: '20px', gridColumn: 'span 1' }} 
      suggestions={suggestionsList}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default SearchBar;
