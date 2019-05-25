/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Tooltip } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
// core components
import styles from "./styles";
import { Helper } from "../../../utils";
import RecruiterPage from "./Component";
import Modal from "./component/Modal";
import axios from "axios";

const { getTxt } = Helper;

const getInitialState = () => {
  const initialState = {
    type: "",
    isOpenModal: false,
    row: {},
    isLoading: true,
    recruiters: [],
    cities: [],
    form: {
      id: null,
      companyName: "",
      email: "",
      description: "",
      address: "",
      logo: "",
      city_id: "",
      phone: ""
    }
  };
  return initialState;
};

class RecruiterPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    this.getListRecruiter();
  }

  getListRecruiter = () => {
    axios
      .get("/admin/api/recruiter/list")
      .then(response => {
        this.setState({ recruiters: response.data, isLoading: false });
      })
      .catch(err => console.log(err));
    axios
      .get("/admin/api/city/list")
      .then(response => {
        this.setState({ cities: response.data, isLoading: false });
      })
      .catch(err => console.log(err));
  };

  handleAdd = () => this.setState({ isOpenModal: true, type: "" });

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleDelete = id => {
    // console.log(id)
    axios
      .delete(`/admin/api/recruiter/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        let updatedRecruiter = [...this.state.recruiters].filter(
          i => i.id !== id
        );
        this.setState({ recruiters: updatedRecruiter });
      })
      .catch(err => console.log(err));
  };

  onChangeValue = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.form[key] = value;
    console.log(value)
  };

  onCreateRecruiter = async () => {
    const { form } = this.state;
    fetch("/admin/api/recruiter", {
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
          this.getListRecruiter();
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

  onUpdateRecruiter = async id => {
    let { form } = this.state;
    form = { ...form, id };
    await fetch(`/admin/api/recruiter/`, {
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
          this.getListRecruiter();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  }

  render() {
    const { classes } = this.props;
    const { recruiters, isOpenModal, row, type, city_id, cities } = this.state;

    const columns = [
      {
        Header: "Nhà tuyển dụng",
        id: "companyName",
        accessor: row => getTxt(row.companyName)
      },
      {
        Header: "Email",
        id: "email",
        accessor: row => getTxt(row.email)
      },
      {
        Header: "Địa chỉ",
        id: "address",
        accessor: row => getTxt(row.address)
      },
      {
        Header: "Ảnh",
        id: "logo",
        accessor: row => getTxt(row.logo)
      },
      {
        Header: "Số điện thoại",
        id: "phone",
        accessor: row => getTxt(row.phone)
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
        <RecruiterPage
          recruiters={recruiters}
          columns={columns}
          classes={classes}
          handleAdd={this.handleAdd}
        />
        {isOpenModal && (
          <Modal
            city_id={city_id}
            cities={cities}
            isOpenModal={isOpenModal}
            handleClose={this.handleClose}
            onChangeValue={this.onChangeValue}
            onCreateRecruiter={this.onCreateRecruiter}
            onUpdateRecruiter={this.onUpdateRecruiter}
            row={row}
            type={type}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(RecruiterPageContainer);
