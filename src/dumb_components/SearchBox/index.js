import React, { Component } from 'react';
import './index.css';

import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class SearchBox extends Component {
  // TODO: clean this up, and use reactstrap - Colin
  render() {
    const { name, test } = this.props

    return (
      <div className="filter-column">
        <div className="filter-container">
        <h3 className="filter-title"> Filter </h3>

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>


        </div>
      </div>
    );
  }
}

export default SearchBox;
