import * as React from 'react';
import { DefaultLayout, Versions } from '../components';
import {
    Row,
    Col
} from 'react-bootstrap';
import { RemoteDoc } from '../config';

export default function Index() {
    return (
        <DefaultLayout>
            <Row>
                <Col xs={12}>
                    <h1>You have no components.</h1>
                </Col>
            </Row>
        </DefaultLayout>
    );
}