import React, { Component } from 'react';
import MultiSelect from '@khanacademy/react-multi-select';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

const styles = {
  chip: {
    margin: 2,
    marginRight: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: '100%',
  },
};

export default class MultiSelectExample extends Component {
  state = {
    selectedOptions: [],
  }

  handleSelectedChanged = (selectedOptions) => (
    this.setState({ selectedOptions })
  )

  handleUnselectItem = (removedVal) => () => (
    this.setState({
      selectedOptions: this.state.selectedOptions
        .filter(option => option !== removedVal)
    })
  )

  renderOption = ({ checked, option, onClick }) => (
    <Checkbox
      label={option.label}
      onCheck={onClick}
      checked={checked}
    />
  )

  renderSelected = (selected, options) => {
    if (!options.length) {
      return <span>Không có ngành nghề nào</span>;
    }

    if (!selected.length) {
      return <span>Chọn ngành nghề...</span>;
    }

    if (selected.length === options.length) {
      return <span>Tất cả</span>;
    }

    if (selected.length > 6) {
      return <span>Đã chọn {selected.length} ngành nghề</span>;
    }

    return (
      <div style={styles.wrapper}>
        {selected.map(value => (
          <Chip
            key={value}
            style={styles.chip}
            onRequestDelete={this.handleUnselectItem(value)}
          >
            {options.find(o => value === o.value).label}
          </Chip>
        ))}
      </div>
    )
  }

  render() {
    const { selectedOptions } = this.state;
    const {options} = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <MultiSelect
          options={options}
          selected={selectedOptions}
          ItemRenderer={this.renderOption}
          valueRenderer={this.renderSelected}
          onSelectedChanged={this.handleSelectedChanged}
        />
      </MuiThemeProvider>
    );
  }
}