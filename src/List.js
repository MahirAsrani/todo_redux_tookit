import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rmvList } from './redux/slices/listSlice';

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.list);
  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: 20 }}>
        {data &&
          data.map((li, index) => (
            <Paper style={{ padding: 10, marginBottom: 5 }}>
              <Grid container spacing={0} justify="center" alignItems="center">
                <Grid item sm={10}>
                  <Typography variant="h6">{li}</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<Delete />}
                    onClick={() => dispatch(rmvList(index))}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
      </Container>
    </div>
  );
};

export default List;
