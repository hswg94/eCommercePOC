import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";

const OrderScreen = () => {
  const { id } = useParams();
  const { data: orderData, isLoading, isError } = useGetOrderDetailsQuery(id);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
        </Message>
      ) : (
        <>
          <h1>Order {orderData._id}</h1>
          <Row>
            <Col md={8}>Col1</Col>
            <Col md={4}>Col2</Col>
          </Row>
        </>
      )}
    </>
  );
};
export default OrderScreen;
