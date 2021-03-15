import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => this.setState({ term: e.target.value });

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search-bar ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
