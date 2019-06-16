import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

export default class SelectFieldExampleSelectionRenderer extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => {
    const { type, onChange } = this.props;
    this.setState({ values });
    if (values) {
      onChange(type, values);
    }
    console.log(values)
  }

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return this.props.options[values[0]].name;
      default:
        return `${values.length} ngành nghề được chọn`;
    }
  }

  menuItems(options) {
    return options.map((option) => (
      <MenuItem
        key={option.value}
        insetChildren={true}
        checked={this.state.values.indexOf(option.value) > -1}
        value={option.value}
        primaryText={option.name}
      />
    ));
  }

  render() {
    const{options} = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <SelectField
          style={{width:"100%"}}
          multiple={true}
          hintText="Công việc thuộc ngành nghề"
          value={this.state.values}
          onChange={this.handleChange}
          selectionRenderer={this.selectionRenderer}
        >
          {this.menuItems(options)}
        </SelectField>
      </MuiThemeProvider>
    );
  }
}
