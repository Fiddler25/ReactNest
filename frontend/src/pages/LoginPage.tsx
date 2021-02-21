import React, { Component } from 'react';

interface LoginPageProps {
  userId: string;
  password: string;
  onChangeText: (userId: string) => void;
  onChangePassword: (password: string) => void;
  onLogin: (userId: string, password: string) => void;
}

export default class LoginPage extends Component<LoginPageProps> {
  handleChangeText = (event: { target: { value: string } }) => {
    this.props.onChangeText(event.target.value);
  };

  handleChangePassword = (event: { target: { value: string } }) => {
    this.props.onChangePassword(event.target.value);
  };

  onLogin = () => {
    const { userId, password } = this.props;
    this.props.onLogin(userId, password);
  };

  render() {
    const { userId, password } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <table>
          <tbody>
            <tr>
              <th>ユーザID</th>
              <td>
                <input
                  type="text"
                  maxLength={10}
                  value={userId}
                  onChange={this.handleChangeText}
                />
              </td>
            </tr>
            <tr>
              <th>パスワード</th>
              <td>
                <input
                  type="password"
                  maxLength={10}
                  value={password}
                  onChange={this.handleChangePassword}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.onLogin}>ログイン</button>
      </div>
    );
  }
}
