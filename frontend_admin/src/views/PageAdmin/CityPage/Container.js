/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-direct-mutation-state */
import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Tooltip } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
// core components
import styles from "./styles";
import CityPage from "./Component";
import { Helper } from "../../../utils";
import Modal from "./component/Modal";
import axios from "axios";

const { getTxt } = Helper;

const getInitialState = () => {
  const initialState = {
    type: "",
    isOpenModal: false,
    row: {},
    isLoading: true,
    cities: [],
    form: {
      id: null,
      name: ""
    }
  };
  return initialState;
};

class CityPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    this.getListCity();
  }

  getListCity = () => {
    axios
      .get("/admin/api/city/list")
      .then(response => {
        this.setState({
          cities: response.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  };

  async handleDelete(id) {
    axios
      .delete(`/admin/api/city/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        let updatedCitys = [...this.state.cities].filter(i => i.id !== id);
        this.setState({ cities: updatedCitys });
      })
      .catch(err => console.log(err));
  }

  handleAdd = () => this.setState({ isOpenModal: true });

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleDelete = id => {
    fetch(`/admin/api/city/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      let updatedCitys = [...this.state.cities].filter(i => i.id !== id);
      this.setState({ cities: updatedCitys });
    });
  };

  onChangeValue = (key, value) => {
    this.state.form[key] = value;
    console.log(value);
  };

  onCreateCity = async () => {
    const { form } = this.state;
    // console.log(history)
    fetch("/admin/api/city", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.getListCity();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  onUpdateCity = async id => {
    let { form } = this.state;
    form = {
      ...form,
      id
    };
    await fetch(`/admin/api/city/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      // params: {id},
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.getListCity();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  handleUpdate = value => {
    this.setState({
      isOpenModal: true,
      type: "edit",
      row: value
    });
  };

  render() {
    const { classes } = this.props;
    const { cities, isOpenModal, row, type } = this.state;

    const columns = [
      {
        Header: "Thành phố",
        id: "name",
        accessor: row => getTxt(row.name)
      },
      {
        Header: "Chức năng",
        width: 150,
        sortable: false,
        Cell: row => (
          <div style={{ textAlign: "center" }}>
            <Tooltip title="Sửa">
              <EditIcon
                className={this.props.classes.edit}
                onClick={() => this.handleUpdate(row.original)}
              />
            </Tooltip>
            <Tooltip title="Xoá">
              <DeleteIcon
                className={this.props.classes.delete}
                onClick={() => this.handleDelete(row.original.id)}
              />
            </Tooltip>
          </div>
        )
      }
    ];

    return (
      <Fragment>
        <CityPage
          cities={cities}
          columns={columns}
          classes={classes}
          handleAdd={this.handleAdd}
        />
        {isOpenModal && (
          <Modal
            isOpenModal={isOpenModal}
            handleClose={this.handleClose}
            onChangeValue={this.onChangeValue}
            onCreateCity={this.onCreateCity}
            onUpdateCity={this.onUpdateCity}
            row={row}
            type={type}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(CityPageContainer);
