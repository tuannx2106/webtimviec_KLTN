/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Tooltip } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
// core components
import styles from "./styles";
import ProfessionPage from "./Component";
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
    skills: [],
    form: {
      id: null,
      professionJobName: ""
    }
  };
  return initialState;
};

class ProfessionPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    this.getListProfession()
  }

  getListProfession = () => {
    axios
      .get("/admin/api/profession/list")
      .then(response => {
        this.setState({ professions: response.data, isLoading: false })
      })
      .catch(err => console.log(err));
  };

  handleAdd = () => this.setState({ isOpenModal: true });

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleDelete = id => {
    // console.log(id)
    axios
      .delete(`/admin/api/profession/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        let updatedProfession = [...this.state.professions].filter(
          i => i.id !== id
        );
        this.setState({ professions: updatedProfession });
      })
      .catch(err => console.log(err));
  };

  onChangeValue = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.form[key] = value;
  };

  onCreateProfession = async () => {
    const { form } = this.state;
    fetch("/admin/api/profession", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        // data = res.data
        if (data) {
          this.getListProfession();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  handleUpdate = row => {
    this.setState({
      isOpenModal: true,
      type: "edit",
      row
    });
  };

  onUpdateProfession = async id => {
    let { form } = this.state;
    form = {
      ...form,
      id
    };
    await fetch(`/admin/api/profession/`, {
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
          this.getListProfession();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  render() {
    const { classes } = this.props;
    const { professions, isOpenModal, row, type } = this.state;

    const columns = [
      {
        Header: "Ngành nghề",
        id: "name",
        accessor: row => getTxt(row.professionJobName)
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
        <ProfessionPage
          professions={professions}
          columns={columns}
          classes={classes}
          handleAdd={this.handleAdd}
        />
        {isOpenModal && (
          <Modal
            isOpenModal={isOpenModal}
            handleClose={this.handleClose}
            onChangeValue={this.onChangeValue}
            onCreateProfession={this.onCreateProfession}
            onUpdateProfession={this.onUpdateProfession}
            row={row}
            type={type}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(ProfessionPageContainer);
