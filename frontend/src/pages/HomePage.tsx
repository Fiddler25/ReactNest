import React, { Component } from 'react';

interface HomePageProps {
  userId: string;
  onLogout: () => void;
}

export default class HomePage extends Component<HomePageProps> {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>ようこそ {'test'} さん</p>
        <button onClick={this.props.onLogout}>ログアウト</button>
      </div>
    );
  }
}
