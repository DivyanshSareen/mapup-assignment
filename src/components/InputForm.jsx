import { Space, Select, Button, Form, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateLocation, updateRegion } from "../formSlice";

const { Option } = Select;

function InputForm() {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [value, setValue] = useState("IN");

  const handleFinish = () => {
    dispatch(updateRegion(value));
    dispatch(updateLocation(value));
  };

  return (
    <Form onFinish={handleFinish} style={{ marginTop: "1em" }}>
      <Space>
        <Form.Item>
          <Select
            style={{ width: "150px" }}
            defaultValue={form.region}
            onChange={(value) => {
              setValue(value);
            }}
          >
            <Option value="IN">India</Option>
            <Option value="US">United States</Option>
            <Option value="UK">United Kingdom</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Tooltip title="Load">
            <Button
              htmlType="submit"
              type="primary"
              icon={<SearchOutlined />}
            ></Button>
          </Tooltip>
        </Form.Item>
      </Space>
    </Form>
  );
}

export default InputForm;
