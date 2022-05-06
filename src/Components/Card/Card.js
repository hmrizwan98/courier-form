import React, { useState } from "react";
import "./Card.scss";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Row,
  Col,
  Checkbox,
} from "antd";
const { TextArea } = Input;
const Card = () => {
  const [increment, setIncrement] = useState(0);
  console.log(increment);
  return (
    <>
      <div className="card">
        <Form layout="vertical">
          <Row gutter={16}>
            {increment == "0" && (
              <>
                <div className="heading">Shipping Address</div>

                <Col className="gutter-row" span={8}>
                  <Form.Item label="Street Address">
                    <Input placeholder="Street Address" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Street Address Line 2">
                    <Input placeholder="Street Address Line 2" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="City">
                    <Input placeholder="City" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="State / Province">
                    <Input placeholder="State / Province" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Postal / Zip Code">
                    <Input placeholder="Postal / Zip Code" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Country">
                    <Select>
                      <Select.Option value="1">Pakistan</Select.Option>
                      <Select.Option value="2">UAE</Select.Option>
                      <Select.Option value="3">America</Select.Option>
                      <Select.Option value="4">Canada</Select.Option>
                      <Select.Option value="5">China</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <div className="heading">Consignee Address</div>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Street Address">
                    <Input placeholder="Street Address" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Street Address Line 2">
                    <Input placeholder="Street Address Line 2" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="City">
                    <Input placeholder="City" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="State / Province">
                    <Input placeholder="State / Province" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Postal / Zip Code">
                    <Input placeholder="Postal / Zip Code" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Country">
                    <Select>
                      <Select.Option value="1">Pakistan</Select.Option>
                      <Select.Option value="2">UAE</Select.Option>
                      <Select.Option value="3">America</Select.Option>
                      <Select.Option value="4">Canada</Select.Option>
                      <Select.Option value="5">China</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </>
            )}
            {increment == "1" && (
              <>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Truck Type">
                    <Select>
                      <Select.Option value="6">Cargo Van</Select.Option>
                      <Select.Option value="7">Sprinter</Select.Option>
                      <Select.Option value="8">12ft Box Truck</Select.Option>
                      <Select.Option value="9">24ft Box Truck</Select.Option>
                      <Select.Option value="10">
                        Dry Van TruckLoad
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Truck Type">
                    <Select>
                      <Select.Option value="6">20 Feet</Select.Option>
                      <Select.Option value="7">40 Feet</Select.Option>
                      <Select.Option value="8">48 Feet</Select.Option>
                      <Select.Option value="9">52 Feet</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Dimensions (LxWxH)">
                    <Input placeholder="Dimensions" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Total Weight">
                    <Input placeholder="Indicate lbs, kg or Tons" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Pickup Date">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <div className="padding-left">
                  <div className="heading">
                    Check appropriate boxes for Pickup Location
                  </div>
                  <Checkbox>No Forklift</Checkbox>
                  <Checkbox>No Loading Dock</Checkbox>
                  <Checkbox>Power Tailgate Required</Checkbox>
                </div>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Delivery Date">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <div className="padding-left">
                  <div className="heading">
                    Check appropriate boxes for Delivery Location
                  </div>
                  <Checkbox>No Forklift</Checkbox>
                  <Checkbox>No Loading Dock</Checkbox>
                  <Checkbox>Power Tailgate Required</Checkbox>
                </div>
              </>
            )}
            {increment == "2" && (
              <>
                <Col className="gutter-row" span={12}>
                  <Form.Item label="Commodity">
                    <Input placeholder="Commodity" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item label="Pieces or Pallet Count">
                    <Input placeholder="Pieces or Pallet Count" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item label="Declared Value">
                    <Input placeholder="in USD $" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item label="Hazardous Material">
                    <Select>
                      <Select.Option value="11">No</Select.Option>
                      <Select.Option value="12">Yes</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={24}>
                  <Form.Item label="Shipment Notes">
                    <TextArea rows={4} value="" />
                  </Form.Item>
                </Col>
              </>
            )}
            {increment == "3" && (
              <>
                <div className="heading">Submit Information</div>

                <Col className="gutter-row" span={8}>
                  <Form.Item label="Company Name">
                    <Input placeholder="Company Name" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Full Name">
                    <Input placeholder="Full Name" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="E-mail">
                    <Input placeholder="E-mail" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Confirm E-mail">
                    <Input placeholder="Confirm E-mail" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Phone Number">
                    <Input placeholder="with Area Code" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Confirm E-mail">
                    <Input placeholder="Confirm E-mail" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Street Address">
                    <Input placeholder="Street Address" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Street Address Line 2">
                    <Input placeholder="Street Address Line 2" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="City">
                    <Input placeholder="City" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="State / Province">
                    <Input placeholder="State / Province" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Postal / Zip Code">
                    <Input placeholder="Postal / Zip Code" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Form.Item label="Country">
                    <Select>
                      <Select.Option value="1">Pakistan</Select.Option>
                      <Select.Option value="2">UAE</Select.Option>
                      <Select.Option value="3">America</Select.Option>
                      <Select.Option value="4">Canada</Select.Option>
                      <Select.Option value="5">China</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </>
            )}

            <div className="next-button">
              {increment == "3" ? (
                <>
                  <Button>Submit</Button>
                  <Button>Clear Form</Button>
                </>
              ) : (
                <Button onClick={() => setIncrement(increment + 1)}>
                  Next
                </Button>
              )}
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Card;
