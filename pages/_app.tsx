import App, { AppContext } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../store/configureStore';
import MainLayout from '../layouts/MainLayout';
import { IApp, IAppComponentType } from './_interfaces';
import { appWithTranslation } from '../i18n'

class MyApp extends App<IApp> {
  static async getInitialProps(appContext: AppContext) {
    let pageProps = { namespacesRequired: ['common'] };

    if (appContext.Component.getInitialProps) {
      const result = await appContext.Component.getInitialProps(appContext.ctx);
      pageProps = { ...pageProps, ...result };
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

export default withRedux(configureStore)(withReduxSaga(appWithTranslation(MyApp)));
