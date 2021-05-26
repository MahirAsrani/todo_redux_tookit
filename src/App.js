import React from 'react';
import { Box, Container } from '@material-ui/core';
import List from './List';
import Form from './Form';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <Box className={styles.box}>
        <Container maxWidth="lg">
          <h1>TODO App with Redux toolkit</h1>
          <Form styles={styles} />
          <List />
        </Container>
      </Box>
    </div>
  );
};

export default App;
