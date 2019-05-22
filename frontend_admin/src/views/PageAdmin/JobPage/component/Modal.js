/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import Button from "../../../Common/components/CustomButtons/Button";
import GridContainer from "../../../Common/components/Grid/GridContainer";
import GridItem from "../../../Common/components/Grid/GridItem";
import { withStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FormLabel,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginTop: "27px",
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class FormDialog extends React.Component {
  emptyItem = {
    expired: "",
    title: "",
    description: "",
    experience: "",
    date: "",
    recruiter: "",
    city: "",
    status: "",
    jobRequireProfessionJobList: [
      {
        jobRequireProfessionJobId: {
          jobId: "",
          professionJobId: ""
        }
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      citys: [],
      status: [],
      recruiter: [],
      name: []
    };
  }
  handleChangeSelectField = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value)
  };

  componentDidMount() {
    this.attachQuillRefs();
  }
  componentDidUpdate() {
    this.attachQuillRefs();
  }
  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== "function") return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item: item });
    console.log(target.value);
  };

  onChangeValueEditor = (key, value) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.item[key] = value;
    console.log(value);
  };

  handleChangeSelect = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = {
      id: value
    };
    this.setState({ item: item });
    console.log(target.value);
  };

  // handleSubmit = async () => {
  //   const { item } = this.state;
  //   fetch("/admin/api/job", {
  //     method: item.id ? "PUT" : "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(item)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         this.props.getListJob();
  //       }
  //     });
  //   this.props.handleClose();
  // };

  onCreateJob = async () => {
    const { item } = this.state;
    fetch(`/admin/api/job`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.props.getListJob();
        }
      })
      .catch(err => console.log(err));
    this.props.handleClose();
  };

  onUpdateJob = async id => {
    let { item } = this.state;
    item = { ...item, id };
    await fetch(`/admin/api/job/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.props.getListJob();
        }
      })
      .catch(err => console.log(err));
    this.props.handleClose();
  };

  render() {
    const {
      isOpenModal,
      classes,
      profession,
      row,
      type,
      handleClose,
      status,
      citys,
      recruiter
    } = this.props;
    const { item } = this.state;
    const title = type === "edit" ? "Sửa thông tin" : "Thêm mới";
    const onSave =
      type === "edit" ? () => this.onUpdateJob(row.id) : this.onCreateJob;
    const statusOptionList = status.map(tus => {
      return (
        <option key={tus.id} value={tus.id}>
          {tus.statusName}
        </option>
      );
    });

    const cityOptionList = citys.map(city => {
      return <option value={city.id}>{city.name}</option>;
    });

    const recruiterOptionList = recruiter.map(re => {
      return <option value={re.id}>{re.companyName}</option>;
    });
    return (
      <div>
        <Dialog open={isOpenModal} fullWidth={true} maxWidth="false">
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            {title}
          </DialogTitle>
          <DialogContent>
            <GridContainer justify="center" noMargin>
              <GridItem xs={11} md={4}>
                <label>Tên công việc</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  name="title"
                  value={item.title || row.title}
                />
              </GridItem>
              <GridItem xs={11} md={2}>
                <label>Kinh nghiệm</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={this.handleChange}
                  name="experience"
                  value={item.experience || row.experience}
                />
              </GridItem>

              <GridItem xs={11} md={2}>
                <label>Ngày đăng tuyển</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={this.handleChange}
                  name="date"
                  value={item.date || row.date}
                />
              </GridItem>
              <GridItem xs={11} md={2}>
                <label>Ngày hết hạn</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={this.handleChange}
                  name="expired"
                  value={"" || row.expired}
                />
              </GridItem>
              <GridItem xs={11} md={4}>
                <FormControl className={classes.textField}>
                  <label>Nhà tuyển dụng</label>
                  <select
                    id="selectRecruiter"
                    className="form-control"
                    name="recruiter"
                    onChange={this.handleChangeSelect}
                  >
                    <option selected>Nhà tuyển dụng...</option>
                    {recruiterOptionList}
                  </select>
                </FormControl>
              </GridItem>
              <GridItem xs={11} md={3}>
                <FormControl className={classes.textField}>
                  <label>Thành phố</label>
                  <select
                    id="selectRecruiter"
                    className="form-control"
                    name="city"
                    onChange={this.handleChangeSelect}
                  >
                    <option selected>Thành phố...</option>
                    {cityOptionList}
                  </select>
                </FormControl>
              </GridItem>
              <GridItem xs={11} md={3}>
                <FormControl className={classes.textField}>
                  <label>Trạng thái</label>
                  <select
                    id="selectRecruiter"
                    className="form-control"
                    name="status"
                    onChange={this.handleChangeSelect}
                  >
                    <option selected>Trạng thái...</option>
                    {statusOptionList}
                  </select>
                </FormControl>
              </GridItem>
              <GridItem xs={11} md={10}>
                {/* <SelectField profession={profession} /> */}
                <div className={classes.root}>
                  <FormControl
                    className={classes.formControl}
                    style={{
                      margin: "36px 0px",
                      width: "100%",
                      maxWidth: "none"
                    }}
                  >
                    <InputLabel htmlFor="select-multiple-chip">
                      Ngành nghề
                    </InputLabel>
                    <Select
                      multiple
                      value={this.state.name}
                      onChange={this.handleChangeSelectField}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {profession.map(item => (
                        <MenuItem key={item.id} value={item.professionJobName}>
                          {item.professionJobName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </GridItem>

              <GridItem xs={12} md={10}>
                <FormControl
                  style={{
                    width: "100%",
                    marginTop: 20,
                    marginBottom: 20
                  }}
                >
                  <FormLabel
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#b2b2b2",
                      paddingBottom: 10
                    }}
                  >
                    Description
                  </FormLabel>
                  <ReactQuill
                    theme="snow"
                    value={row.description || item.description}
                    name="description"
                    onChange={value =>
                      this.onChangeValueEditor("description", value)
                    }
                    modules={FormDialog.modules}
                    formats={FormDialog.formats}
                    placeholder={"Viết nội dung vào đây..."}
                    ref={el => {
                      this.reactQuillRef = el;
                    }}
                    style={{ height: "200px" }}
                  />
                </FormControl>
              </GridItem>
            </GridContainer>
          </DialogContent>
          <GridContainer
            style={{ height: "10%" }}
            justify="center"
            alignItems="center"
          >
            <GridItem>
              <Button
                onClick={onSave}
                color="info"
                style={{ margin: "10px 10px" }}
              >
                Lưu
              </Button>
              <Button
                onClick={handleClose}
                color="secondary"
                style={{ margin: "10px 10px" }}
              >
                Thoát
              </Button>
            </GridItem>
          </GridContainer>
        </Dialog>
      </div>
    );
  }
}
FormDialog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent"
];

FormDialog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
export default withStyles(styles)(FormDialog);
