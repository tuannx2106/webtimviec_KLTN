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
import { toast } from "react-toastify";
import ModalConfirm from "../../Common/components/ModalDelete/index";

const { getTxt } = Helper;

const getInitialState = () => {
  const initialState = {
    jobs: [],
    isLoading: true,
    modalDelete: false,
    idDelte: "",
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
      description: "",
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

  async getListJob() {
    let ListJob = await fetch(`/admin/api/job/list`).then(response => response.json())
    let ListCity = await fetch(`/admin/api/city/list`).then(response => response.json())
    let ListStatus = await fetch(`/admin/api/status/list`).then(response => response.json())
    let ListRecruiter = await fetch(`/admin/api/recruiter/list`).then(response => response.json())
    let ListProf = await fetch(`/admin/api/profession/list`).then(response => response.json())
     
    this.setState({
      jobs: ListJob,
      citys: ListCity,
      statuss: ListStatus,
      recruiters: ListRecruiter,
      professions: ListProf
    })
  };

  handleAdd = () => {
    this.setState({ isOpenModal: true });
  };

  handleClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleDelete = (idDelte) => this.setState({ idDelte, modalDelete: true });

  handleCloseModalDelete = () => {
    this.setState({
      row: {},
      modalDelete: false
    });
  };

  onhandleDelete = () => {
    const { idDelte } = this.state;
    fetch(`/admin/api/job/${idDelte}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      this.getListJob();
      toast.success('Xoá công việc thành công')
    }).catch(err => {
      if (err) {
        toast.error('Xoá công việc không thành công');
      }
    })
  this.setState({ modalDelete: false })
  };

  onChangeValue = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    let { form } = this.state;
    form[key] = value;
    this.setState({ form });
    // eslint-disable-next-line no-console
  };

  handleChangeSelect = (key, value) => {
    let { form } = this.state;
    form[key] = {
      id: value
    };
    this.setState({ form: form });
  };

  onCreateJob = async () => {
    const { form } = this.state;
    const { title, description, expired, experience, date, status, recruiter, city, jobRequireProfessionJobList } = form

    const jobItem = {
      title,
      description,
      expired,
      experience,
      date,
      status,
      recruiter,
      city
    }

    //Add job
    const newJob = await fetch(`/admin/api/job`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jobItem)
    }).then(res => res.json())

    const jrpjList = [...jobRequireProfessionJobList.id.map(profId => ({
      job: { id: newJob.id },
      professionJob: { id: profId }
    }))]

    //add profession Job to that job
    await jrpjList.map(async jrpj => {
      await fetch('/admin/api/jobrequireprofession', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jrpj)
      }).then(res => res.json())
        .then(data => {
          if (data) {
            toast.success('Thêm mới công việc thành công')
            this.getListJob();
          }
        }).catch(err => {
          if (err) {
            toast.error('Thêm mới công việc không thành công');
          }
        })
        this.setState({ isOpenModal: false });
    })
   
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
          toast.success('Cập nhật công việc thành công')
          this.getListJob();
        }
      }).catch(err => {
        if (err) {
          toast.error('Cập nhật công việc không thành công');
        }
      })
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
      modalDelete
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
          {modalDelete && (
          <ModalConfirm
            modalDelete={modalDelete}
            title="Xoá công việc ?"
            onConfirm={this.onhandleDelete}
            handleClose={this.handleCloseModalDelete}
          />
        )}
      </Fragment>
    );
  }
}

export default withStyles(styles)(JobPageContainer);