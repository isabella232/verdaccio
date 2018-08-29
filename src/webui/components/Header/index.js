import React from 'react';
import {Link} from 'react-router-dom';
import classes from './header.scss';
import Search from '../../components/Search';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    handler: PropTypes.func
  };

  render() {
    return (
      <header className={classes.header}>
        <div className={classes.headerWrap}>
          <Link to="/">
            <svg fill="#ff00bf" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 72 50" className={classes.logo} data-reactid="13"><g data-reactid="14"><g data-reactid="15"><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888zM68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584" data-reactid="16"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z" data-reactid="17"></path></g></g></svg>
          </Link>
          <Search handleSearchInput={this.props.handler}/>
        </div>
      </header>
    );
  }
}
