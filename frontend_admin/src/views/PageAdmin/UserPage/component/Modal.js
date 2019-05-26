/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../../Common/components/CustomButtons/Button";
import Input from "../../../Common/components/CustomInput/CustomInput";
import GridContainer from "../../../Common/components/Grid/GridContainer";
import GridItem from "../../../Common/components/Grid/GridItem";
import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginTop: "27px",
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  control: {
    marginTop: "42px"
  }
});

export class FormDialog extends React.Component {
  render() {
    const {
      classes,
      isOpenModal,
      handleClose,
      row,
      type,
      onChangeValue,
      onCreateUser,
      onUpdateUser
    } = this.props;
    const title = type === "edit" ? "Sửa thông tin" : "Thêm mới";
    const onSave = type === "edit" ? () => onUpdateUser(row.id) : onCreateUser;
    return (
      <div>
        <Dialog open={isOpenModal} fullWidth={true} maxWidth="false">
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            {title}
          </DialogTitle>
          <DialogContent>
            <GridContainer justify="center" noMargin>
              <GridItem xs={11} md={5}>
                <Input
                  labelText="Họ tên"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: e => onChangeValue("name", e.target.value),
                    defaultValue: row.name || ""
                  }}
                />
              </GridItem>
              <GridItem xs={11} md={5}>
                <Input
                  labelText="Email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: e => onChangeValue("email", e.target.value),
                    defaultValue: row.email || ""
                  }}
                />
              </GridItem>
              <GridItem xs={11} md={4}>
                <Input
                  labelText="Địa chỉ"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: e => onChangeValue("address", e.target.value),
                    defaultValue: row.address || ""
                  }}
                />
              </GridItem>
              <GridItem xs={11} md={3}>
                <Input
                  labelText="Số điện thoại"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: e => onChangeValue("sdt", e.target.value),
                    defaultValue: row.sdt || ""
                  }}
                />
              </GridItem>
              <GridItem xs={11} md={3}>
                <Input
                  labelText="Ngày sinh (yyyy-mm-dd)"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: e =>
                      onChangeValue("birthday", e.target.value),
                    defaultValue: row.birthday || ""
                  }}
                />
              </GridItem>
              <GridItem xs={11} md={4}>
                <Input
                  labelText="Ảnh"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: e => onChangeValue("avatar", e.target.value),
                    defaultValue: row.avatar || ""
                  }}
                />
              </GridItem>
              <GridItem xs={11} md={6}>
                <FormControlLabel
                  className={classes.control}
                  control={
                    <Checkbox
                      // checked={isAdmin}
                      onChange={e => onChangeValue("isAdmin", e.target.checked)}
                      value={row.isAdmin}
                      color="primary"
                    />
                  }
                  label="Quản trị viên"
                />
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
export default withStyles(styles)(FormDialog);
