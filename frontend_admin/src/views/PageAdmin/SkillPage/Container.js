/* eslint-disable no-console */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Tooltip } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
// core components
import styles from "./styles";
import SkillPage from "./Component";
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
      skillName: ""
    }
  };
  return initialState;
};

class SkillPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    this.getListSkill();
  }

  getListSkill = () => {
    axios
      .get("/admin/api/skill/list")
      .then(response => {
        this.setState({ skills: response.data, isLoading: false });
      })
      .catch(err => console.log(err));
  };

  handleAdd = () => this.setState({ isOpenModal: true, type:""});

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleDelete = id => {
    // console.log(id)
    axios
      .delete(`/admin/api/skill/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        let updatedSkills = [...this.state.skills].filter(i => i.id !== id);
        this.setState({ skills: updatedSkills });
      })
      .catch(err => console.log(err));
  };

  onChangeValue = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.form[key] = value;
  };

  onCreateSkill = async () => {
    const { form } = this.state;
    fetch("/admin/api/skill", {
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
          this.getListSkill();
        }
      })
      .catch(err => console.log(err));
    this.setState({ isOpenModal: false });
  };

  onUpdateSkill = async id => {
    let { form } = this.state;
    form = {
      ...form,
      id
    };
    await fetch(`/admin/api/skill/`, {
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
        // data = res.data
        if (data) {
          this.getListSkill();
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
    // eslint-disable-next-line react/prop-types
    const { classes } = this.props;
    const { skills, isOpenModal, row, type } = this.state;

    const columns = [
      {
        Header: "Kỹ năng",
        id: "name",
        accessor: row => getTxt(row.skillName)
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
    ]

    return (
      <Fragment>
        <SkillPage
          skills={skills}
          columns={columns}
          classes={classes}
          handleAdd={this.handleAdd}
        />
        {isOpenModal && (
          <Modal
            row={row}
            isOpenModal={isOpenModal}
            handleClose={this.handleClose}
            onChangeValue={this.onChangeValue}
            onCreateSkill={this.onCreateSkill}
            onUpdateSkill={this.onUpdateSkill}
            row={row}
            type={type}
          />
        )}
      </Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(SkillPageContainer));
