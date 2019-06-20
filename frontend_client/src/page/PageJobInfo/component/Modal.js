/* eslint-disable react/prop-types */
import React from "react";
import {withRouter} from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {

  handleApply = async (id) => {
    fetch(`/admin/api/userjob/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "job": { "id": id },
        "users": { "id": this.props.curentUser.id }
      })
    })
    this.props.history.push("/tatcacongviec")
  }


  render() {
    const { isOpenModal, handleClose, job, curentUser } = this.props;
    return (
      <div>
        <Dialog
          open={isOpenModal}
          fullWidth={true}
          style={{ fontFamily: "Roboto", color: "#3A3A3A" }}
        >
          <DialogTitle id="form-dialog-title" className="text-center" >
            <h3>Nộp hồ sơ</h3>
            <h3>--------------</h3>
          </DialogTitle>
          <DialogContent style={{ padding: "10px 50px" }}>
            <h5 className="text-center" style={{ marginBottom: "40px", fontSize: "25px" }}>{job.title}</h5>
            <h5>Tên của bạn: {curentUser.name}</h5>
            <div style={{ display: "flex", margin: "30px 0px 30px" }}>
              <h5>CV của bạn:  </h5>
              <input type="file" />
            </div>
            <div>
              <h5>Nội dung gửi đến nhà tuyển dụng:  </h5>
              <textarea style={{width:"100%"}} />
            </div>
          </DialogContent>
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleClose} style={{ width: "20%", margin: "20px" }}>Đóng</button>
            <button className="btn btn-primary" style={{ width: "20%", margin: "20px" }} onClick={() => this.handleApply(job.id)}>Nộp hồ sơ</button>
          </div>
        </Dialog>
        ))}
      </div>
    );
  }
}
export default withRouter(FormDialog)