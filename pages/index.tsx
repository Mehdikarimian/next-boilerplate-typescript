import React from 'react';
import { getAll } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import SelectIndexState from './selectors';
import { IIndexPage } from './interfaces';
import { withTranslation } from '../i18n';
import { IStore } from '../store/reducers';
import Posts from '../sections/posts';

class Index extends React.Component<IIndexPage.IProps> {
  constructor(props: IIndexPage.IProps) {
    props.dispatch(getAll())
    super(props);
  }
  public render(): JSX.Element {
    const { posts } = this.props.IndexState;
    return (
      <div>
        <h2>{this.props.t('title')}</h2>
        <Posts posts={posts} />
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

