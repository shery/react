import React from 'react';
import GithubBox from '../../components/GithubBox';

const ResultPage = ({ userId, data }) => {
  return (
    <div>
      <GithubBox data={data} userId={userId} />
    </div>
  );
};

ResultPage.propTypes = {
  data: React.PropTypes.string,
  userId: React.PropTypes.Object
};

export default ResultPage;
