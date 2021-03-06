import * as React from 'react';
import { ComponentType } from '../types';
import Props from './Props';
import {
    Panel,
    Table
} from 'react-bootstrap';

export default function Component(props: ComponentType) {
    const { className, description } = props;

    return (
        <div>
            <h3>{className}</h3>
            <Panel>{description}</Panel>
            <Props {...{ list: props.props }} />
        </div>
    );
}