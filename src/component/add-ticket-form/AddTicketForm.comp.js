import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";


import "./add-ticket-form.style.css";

export const AddTicketForm = ({
    handleOnSubmit, 
    handleOnChange, 
    frmDataError, 
    frmDt,
}) => {
    console.log(frmDt);
    return (
            <div className="jumbotron mt-3 add-new-ticket bg-light" >
                <h1 className="text-info text-center">Add New Ticket</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                Subject
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control
                                name="subject"
                                value={frmDt.subject}

                                onChange={handleOnChange}
                                placeholder="Subject"
                                required
                            />
                            <Form.Text className="text-danger">
                                {frmDataError.subject && "Subject is required"}
                            </Form.Text>
                            </Col>
                        </Form.Group>
                        <p />
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                Issue Found
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="date"
                                    name="issueDate"
                                    value={frmDt.issueDate}
                                    onChange={handleOnChange}
                                    required
                                />
                            </Col>
                        </Form.Group>
                        <p />
                        <Form.Group>
                            <Form.Label>Detail</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="detail"
                                value={frmDt.detail}
                                rows="5"
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <p />
                        <Button type="submit" variant="info" block="true">
                            Submit
                        </Button>
                    </Form>
            </div>
    );
};

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired, 
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
 };
