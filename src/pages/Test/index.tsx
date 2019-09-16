import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { testLoad } from 'actions/test';

import ImagesList from 'components/ImagesList';

import logo from 'assets/logo.svg';

import './styles.css';

interface IProps extends IStateProps, IActionsProps {
}

class Test extends React.Component<IProps> {

  public limit = 10;
  public page = 0;

  public componentDidMount() {
    this.props.testLoad(this.limit, this.page);
  }

  public loadNext = () => {
    this.page++;
    this.props.testLoad(this.limit, this.page);
  }

  public loadPrevious = () => {
    this.page--;
    this.props.testLoad(this.limit, this.page);
  }

  public render() {
    const { loading, data, error, } = this.props;

    return (
      <div className={'App'}>
        <header className={'App-header'}>
          <img src={logo} className={'App-logo'} alt={'logo'} />
          <p>
            {'Edit' }<code>{'src/App.js'}</code>{' and save to reload.'}
          </p>
        </header>
        <div>
          <button onClick={this.loadPrevious} disabled={this.page <= 0}>
            {'<'}
          </button>
          <button onClick={this.loadNext}>{'>'}</button>
          <ImagesList data={data} />
          { loading && (<div>{'loading'}</div>) }
          { error && (<div>{'an error occured'}</div>) }
        </div>
      </div>
    );
  }
}

interface IStateProps {
  loading: boolean;
  data: any[];
  error: any;
}

interface IActionsProps {
  testLoad: typeof testLoad;
}

const mapStateToProps = (state: any): IStateProps => ({
  ...state.test,
});

const mapDispatchToProps = (dispatch: any): IActionsProps => bindActionCreators(
  {
    testLoad,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Test);
