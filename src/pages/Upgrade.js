import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faDownload, faCheckCircle, faRocket, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button } from '@themesberg/react-bootstrap';
import { Table } from '@themesberg/react-bootstrap';

export default () => {
    return (
        <>
            <Row className="mt-lg-5 mt-4 d-flex justify-content-center">
                <Col xl={8}>
                    <h1 className="text-center fw-bolder">Contact Developer<FontAwesomeIcon icon={faRocket} className="ms-1" /></h1>
                    <p className="text-center lead mb-lg-5 mb-4">Looking to take React development to the next level? Check out the premium version of Volt React Dashboard.</p>
                    <Table className="comparison-table table-striped">
                       

                                <td className="border-0">
                                    <Button href="https://suhail312.netlify.app/" target="_blank" variant="secondary" className="m-0 mt-3">Contact<FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
                                </td>
                        
                    </Table>
                </Col>
            </Row>
        </>
    );
};
