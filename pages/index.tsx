import React from 'react';
import { getAll } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import SelectIndexState from './selectors';

interface IIndexProps {
  dispatch: Function,
  IndexState: any
}
class Index extends React.Component<IIndexProps> {
  constructor(props: IIndexProps) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getAll())
  }
  private mapPosts() {
    return this.props.IndexState.posts.map((post: any) => (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))
  }
  public render(): JSX.Element {
    return (
      <div>
        {this.mapPosts()}
      </div>
    )
  }
}



const mapStateToProps = createStructuredSelector<any, any>({
  IndexState: SelectIndexState()
});

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Index);

