import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Select, Button } from "antd";
import Card from "@material-ui/core/Card";
import { CardHeader } from "@mui/material";
import CardMedia from "@material-ui/core/CardMedia";

const DogApi = () => {
  const [data, setData] = useState();
  const tempArray = [];
  const [dogListArray, updateDogListArray] = useState([]);
  const [selectedBreed, changeSelectedBreed] = useState("");
  const [bool, changeBool] = useState(true);

  const onChange = (value) => {
    changeSelectedBreed(value);
  };

  const getRandomDogPicture = async () => {
    try {
      const result = await axios.get(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random`
      );
      setData(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllDogs = async () => {
    try {
      const result = await axios.get(`https://dog.ceo/api/breeds/list/all`);
      for (const [breed] of Object.entries(result.data.message)) {
        tempArray.push({
          value: breed,
        });
      }
      updateDogListArray(tempArray);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="dog-card">
      <CardHeader
        title="Calling Api(Random dog pictures by breed)"
        subheader="source: https://dog.ceo/dog-api/"
      />
      <Form className="contact-form">
        <Form.Item
          name={"Breed"}
          label="Breed"
          labelAlign="left"
          id="Breed"
          rules={[
            {
              required: true,
              validator: (_, value) =>
                value ? changeBool(false) : changeBool(true),
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 150 }}
            placeholder="Select or search a dog"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {dogListArray.map((dog) => (
              <Select.Option key={dog.value} value={dog.value}>
                {dog.value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Button
          disabled={bool}
          type="primary"
          htmlType="submit"
          onClick={getRandomDogPicture}
          className="getdogs-button"
        >
          Show Picture
        </Button>
      </Form>
      {data ? (
        <CardMedia
          component="img"
          height="100"
          image={data.message}
          alt={data.message}
        />
      ) : (
        <p>Please select the breed name to load the picture</p>
      )}
    </Card>
  );
};

export default DogApi;
