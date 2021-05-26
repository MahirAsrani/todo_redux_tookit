import React from 'react';
import { Box, Fab, Container, TextField, Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addList } from './redux/slices/listSlice';

const Form = ({ styles }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.listdata.value !== '' &&
      dispatch(addList(e.target.listdata.value));
    e.target.listdata.value = '';
  };
  return (
    <div>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <TextField
              id="outlined-basic"
              label="Enter your item"
              variant="outlined"
              name="listdata"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Fab color="primary" aria-label="add" type="submit">
              <Add />
            </Fab>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
