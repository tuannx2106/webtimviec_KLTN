/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  render() {
    const { isOpenModal, handleClose } = this.props;
    return (
      <div>
        <Dialog
          open={isOpenModal}
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            <h3>Thông báo </h3>
          </DialogTitle>
          <DialogContent style={{padding:"10px 50px"}}>
            <h5>Nộp đơn ứng tuyển thành công !!!</h5>
            <h6>Nhà tuyển dụng sẽ xem hồ sơ và sớm liên hệ lại với bạn. </h6>
          </DialogContent>
          <button className="btn btn-primary" onClick={handleClose} style={{width:"20%",margin:"10px auto"}}>Đóng</button>
        </Dialog>
      </div>
    );
  }
}
