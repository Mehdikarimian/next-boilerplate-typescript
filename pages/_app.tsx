import App, { AppContext } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../store/configureStore';
import MainLayout from '../layouts/MainLayout';
import { IApp, IAppComponentType } from './_interfaces';

class MyApp extends App<IApp> {
  static async getInitialProps(appContext: AppContext) {
    let pageProps = {};

    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }

    return { pageProps };
  }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;
    const Layout = (Component as IAppComponentType).Layout;
    return (
      <Provider store={store}>
        {Layout ?
          <Layout><Component {...pageProps} /></Layout> :
          <MainLayout><Component {...pageProps} /></MainLayout>
        }
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
