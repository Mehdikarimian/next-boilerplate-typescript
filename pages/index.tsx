import React from 'react';
import { getAll } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import SelectIndexState from './selectors';
import { IIndexPage } from './interfaces';
import { withTranslation } from '../i18n';
import { IStore } from '../store/reducers';

class Index extends React.Component<IIndexPage.IProps> {
  constructor(props: IIndexPage.IProps) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getAll())
  }
  private mapPosts() {
    return this.props.IndexState.posts.map((post: any) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))
  }
  public render(): JSX.Element {
    return (
      <div>
        <h2>{this.props.t('title')}</h2>
        {this.mapPosts()}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector<IStore, IIndexPage.ISelectorProps>({
  IndexState: SelectIndexState(),
});

function mapDispatchToProps(dispatch: Function) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withTranslation(['common'])(Index));

