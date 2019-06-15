import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Tooltip } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
// core components
import styles from "./styles";
import JobPage from "./Component";
import { Helper } from "../../../utils";
import Modal from "./component/Modal";

const { getTxt } = Helper;

const getInitialState = () => {
  const initialState = {
    jobs: [],
    isLoading: true,
    row: {},
    isOpenModal: false,
    citys: [],
    statuss: [],
    professions: [],
    recruiters: [],
    jobRequireProfessionJobList: [],
    status: "",
    recruiter: "",
    city: "",
    form: {
      title: "",
      companyName: "",
      expired: "",
      experience: "",
      date: "",
      status: "",
      recruiter: "",
      city: "",
      jobRequireProfessionJobList: ""
    }
  };
  return initialState;
};

class JobPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...getInitialState(),
      columns: [
        {
          Header: "Công việc",
          id: "title",
          accessor: row => getTxt(row.title)
        },
        {
          Header: "Kinh nghiệm",
          id: "experience",
          accessor: row => getTxt(row.experience)
        },
        {
          Header: "Ngày đăng tuyển",
          id: "date",
          accessor: row => getTxt(row.date)
        },
        {
          Header: "Nhà tuyển dụng",
          id: "companyName",
          accessor: row => getTxt(row.recruiter.companyName)
          // accessor: "recruiter.companyName"
        },
        {
          Header: "Thành phố",
          id: "name",
          accessor: row => getTxt(row.city.name)
          // accessor: "city.name"
        },
        {
          Header: "Trạng thái",
          id: "statusName",
          accessor: row => getTxt(row.status.statusName)
          // accessor: "status.statusName"
        },
        {
          Header: "Chức năng",
          width: 150,
          sortable: false,
          Cell: row => (
            <div style={{ textAlign: "center" }}>
              <Tooltip title="Sửa">
                <EditIcon
                  // eslint-disable-next-line react/prop-types
                  className={this.props.classes.edit}
                  onClick={() => this.handleUpdate(row.original)}
                />
              </Tooltip>
              <Tooltip title="Xoá">
                <DeleteIcon
                  // eslint-disable-next-line react/prop-types
                  className={this.props.classes.delete}
                  onClick={() => this.handleDelete(row.original.id)}
                />
              </Tooltip>
            </div>
          )
        }
      ]
    };
  }

  componentDidMount() {
    this.getListJob();
  }

  getListJob = () => {
    fetch(`/admin/api/job/list`)
      .then(response => response.json())
      .then(data => this.setState({ jobs: data, isLoading: false }));

    fetch(`/admin/api/city/list`)
      .then(response => response.json())
      .then(data => this.setState({ citys: data }));

    fetch(`/admin/api/status/list`)
      .then(response => response.json())
      .then(data => this.setState({ statuss: data }));

    fetch(`/admin/api/recruiter/list`)
      .then(response => response.json())
      .then(data => this.setState({ recruiters: data }));

    fetch(`/admin/api/profession/list`)
      .then(response => response.json())
      .then(data => this.setState({ professions: data }));
  };

  handleAdd = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleDelete = id => {
    fetch(`/admin/api/job/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      let updatedJob = [...this.state.jobs].filter(i => i.id !== id);
      this.setState({ jobs: updatedJob });
    });
  };

  onChangeValue = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    let { form } = this.state;
    form[key] = value;
    this.setState({ form });
    // eslint-disable-next-line no-console
    console.log(value);
  };

  handleChangeSelect = (key, value) => {
    let { form } = this.state;
    form[key] = {
      id: value
    };
    this.setState({ form: form });
    console.log(value);
  };

  onCreateJob = async () => {
    const { form } = this.state;
    console.log(form)
    await fetch(`/admin/api/job`, {
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
          this.getListJob();
        }
      });
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

  onUpdateJob = async id => {
    let { form } = this.state;
    form = { ...form, id };
    await fetch(`/admin/api/job/`, {
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
          this.getListJob();
        }
      });
    this.setState({ isOpenModal: false });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { classes } = this.props;
    const {
      columns,
      jobs,
      isOpenModal,
      row,
      citys,
      recruiters,
      professions,
      statuss,
      type,
      city,
      recruiter,
      status,
    } = this.state;
    return (
      <Fragment>
        <JobPage
          jobs={jobs}
          columns={columns}
          classes={classes}
          handleAdd={this.handleAdd}
        />
        <Modal
          isOpenModal={isOpenModal}
          handleClose={this.handleClose}
          row={row}
          type={type}
          recruiter={recruiter}
          city={city}
          status={status}
          citys={citys}
          professions={professions}
          recruiters={recruiters}
          statuss={statuss}
          onChangeValue={this.onChangeValue}
          handleChangeSelect={this.handleChangeSelect}
          onCreateJob={this.onCreateJob}
          onUpdateJob={this.onUpdateJob}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(JobPageContainer);