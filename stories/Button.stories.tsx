import React from 'react';
import { Button } from '../src';

export default {
  title: 'Buttons',
};

export const Primary = () => <Button title="Hi guys!" />;

export const Secondary = () => (
  <Button variant="outline" color="danger" title="Hi guys!" />
);
