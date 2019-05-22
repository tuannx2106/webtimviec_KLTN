/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button } from "@material-ui/core";
import CardIcon from "../../Common/components/Card/CardIcon";
import GridItem from "../../Common/components/Grid/GridItem";
import GridContainer from "../../Common/components/Grid/GridContainer";
import Card from "../../Common/components/Card/Card";
import CardHeader from "../../Common/components/Card/CardHeader";
import CardBody from "../../Common/components/Card/CardBody";

class CityPage extends Component {
  render() {
    const { classes, cities, columns, handleAdd } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <CardIcon color="primary" className={classes.bgcolor}>
                <h4 className={classes.cardTitleWhite}>Thành phố </h4>
              </CardIcon>
              <Button
                className={classes.bgcolor}
                style={{ float: "right", color: "#fff" }}
                onClick={handleAdd}
              >
                Thêm mới
              </Button>
            </CardHeader>
            <CardBody>
              <ReactTable
                style={{ textAlign: "center" }}
                data={cities}
                columns={columns}
                defaultPageSize={6}
                sortable={false}
                showPageSizeOptions={false}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default CityPage;
