import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId
}) => {
  return (
    <div>
      <TextField
        hintText="Please Key in your Github User Id."
        onChange={onChangeUserId}
      />

      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
      <Link
        to={{
          pathname: '/result',
          query: { userId }
        }}
      />
    </div>
  );
  // return (
  //   <div>

  //   </div>
  // );
};


export default HomePage;
