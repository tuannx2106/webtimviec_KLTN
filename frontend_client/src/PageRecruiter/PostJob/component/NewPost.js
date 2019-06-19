import React, { Component, Fragment } from 'react';
import ReactQuill from "react-quill";
import SelectField from "./SelectField";
import "react-quill/dist/quill.snow.css";

class NewPost extends Component {
  emptyItem = {
    expired: "",
    title: "",
    description: "",
    experience: "",
    date: "",
    recruiter: this.props.curentRecruiter,
    city: "",
    status: "",
    jobRequireProfessionJobList: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      jobRequireProfessionJobList: [],
      item: this.emptyItem,
    };
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

  handleChangeSelectField = (key, value) => {
    let { item } = this.state;
    item[key] = {
      id: value
    };
    this.setState({ item: item });
    console.log(value)
  };

  onRecruiterPostJob = async () => {
    const { item } = this.state;
    const { title, description, expired, experience, date, status, recruiter, city, jobRequireProfessionJobList } = item;

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
            alert("Đăng công việc thành công")
          }
        })
        .catch(err => alert(err));
    })
  };

    // onCreateJob = async () => {
    //   const { item } = this.state;
    //   fetch(`/admin/api/job`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(item)
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       if (data) {
    //         alert("Đăng công việc thành công")
    //       }
    //     })
    //     .catch(err => alert(err));
    // };

    render() {
      const { item } = this.state;
      const { profession } = this.props;
      const statusOptionList = this.props.status.map(tus => {
        return (
          <option key={tus.id} value={tus.id}>
            {tus.statusName}
          </option>
        );
      });

      const cityOptionList = this.props.cities.map(city => {
        return <option value={city.id}>{city.name}</option>;
      });

      return (
        <Fragment>
          <div className="p-5 bg-white">
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Tên công việc</label>
                <input type="text" className="form-control" onChange={this.handleChange}
                  name="title" value={item.title} placeholder="Nhập vào tên công việc..." />
              </div>
            </div>
            <div className="row form-group mb-5">
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Ngày đăng tuyển</label>
                <input type="date" className="form-control" value={item.date} onChange={this.handleChange}
                  name="date" />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Ngày hết hạn</label>
                <input type="date" className="form-control" value={item.expired} onChange={this.handleChange}
                  name="expired" />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Kinh nghiệm</label>
                <input type="number" className="form-control" value={item.experience} onChange={this.handleChange}
                  name="experience" />
              </div>
            </div>
            <div className="row form-group mb-4">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Thành phố</label>
                <select
                  id="selectRecruiter"
                  className="form-control"
                  name="city"
                  onChange={this.handleChangeSelect}
                >
                  <option selected>Thành phố...</option>
                  {cityOptionList}
                </select>
              </div>
            </div>

            <div className="row form-group mb-4">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Trạng thái công việc</label>
                <select
                  id="selectRecruiter"
                  className="form-control"
                  name="status"
                  onChange={this.handleChangeSelect}
                >
                  <option selected>Trạng thái...</option>
                  {statusOptionList}
                </select>
              </div>
            </div>
            <div className="row form-group mb-4">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Thuộc Ngành nghề</label>
                <SelectField
                  options={profession ? profession.map(el => ({ name: el.professionJobName, value: el.id })) : []}
                  type="jobRequireProfessionJobList"
                  onChange={this.handleChangeSelectField}
                />
              </div>
            </div>
            <div className="row form-group mb-4">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Mô tả</label>
                <ReactQuill
                  name="description"
                  value={item.description}
                  onChange={value =>
                    this.onChangeValueEditor("description", value)
                  }
                  theme="snow"
                  modules={NewPost.modules}
                  formats={NewPost.formats}
                  placeholder={"Viết nội dung vào đây..."}
                  ref={el => {
                    this.reactQuill = el;
                  }}
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className="row form-group text-center mt-3">
            <div className="col-md-12">
              <input type="submit" className="btn btn-primary py-2 px-5" onClick={this.onRecruiterPostJob} value="Đăng tuyển" ></input>
            </div>
          </div>
        </Fragment>
      );
    }
  }
  NewPost.formats = [
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
    "indent",
    "link",
    "image"
  ];

  NewPost.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };
  export default NewPost;