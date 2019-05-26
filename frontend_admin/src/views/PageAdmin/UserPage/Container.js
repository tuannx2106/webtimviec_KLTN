/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Tooltip } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
// core components
import styles from "./styles";
import UsersPage from "./Component";
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
    users: [],
    isAdmin: "",
    form: {
      name: "",
      email: "",
      sdt: "",
      birthday: "",
      isAdmin: "",
      address: "",
    }
  };
  return initialState;
};

class UsersPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    this.getListUsers();
  }

  getListUsers = () => {
    axios
      .get("/admin/api/users/list")
      .then(response => {
        this.setState({ users: response.data, isLoading: false });
      })
      .catch(err => console.log(err));
  };

  handleAdd = () => this.setState({ isOpenModal: true, type:"" });

  handleClose = () => this.setState({ isOpenModal: false });

  handleDelete = id => {
    // console.log(id)
    axios
      .delete(`/admin/api/users/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        let updatedUser = [...this.state.users].filter(i => i.id !== id);
        this.setState({ users: updatedUser });
      })
      .catch(err => console.log(err));
  };
  onChangeValue = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.form[key] = value;
    // eslint-disable-next-line no-console
    console.log(value);
  };

  onCreateUser = async () => {
    const { form } = this.state;
    fetch("/admin/api/users", {
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
          this.getListUsers();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  handleUpdate = row => {
    this.setState({
      isOpenModal: true,
      type: "edit",
      row,
      form: row
    });
  };

  onUpdateUser = async id => {
    let { form } = this.state;
    form = { ...form, id };
    await fetch(`/admin/api/users/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.getListUsers();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  render() {
    const { classes } = this.props;
    const { users, isOpenModal, isAdmin, row, type } = this.state;

    const columns = [
      {
        Header: "Họ tên",
        id: "name",
        accessor: row => getTxt(row.name)
      },
      {
        Header: "Email",
        id: "email",
        accessor: row => getTxt(row.email)
      },
      {
        Header: "Số điện thoại",
        id: "sdt",
        accessor: row => getTxt(row.sdt)
      },
      {
        Header: "Địa chỉ",
        id: "address",
        accessor: row => getTxt(row.address)
      },
      {
        Header: "Ngày sinh",
        id: "birthday",
        accessor: row => getTxt(row.birthday)
      },
      {
        Header: "Quản trị viên",
        id: "isAdmin",
        accessor: row => getTxt(row.isAdmin)
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
        <UsersPage
          users={users}
          columns={columns}
          classes={classes}
          handleAdd={this.handleAdd}
        />
        {isOpenModal && (
          <Modal
            isOpenModal={isOpenModal}
            handleClose={this.handleClose}
            onChangeValue={this.onChangeValue}
            onCreateUser={this.onCreateUser}
            onUpdateUser={this.onUpdateUser}
            type={type}
            row={row}
            isAdmin={isAdmin}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(UsersPageContainer);
