import React, { PureComponent } from 'react';

class Audio extends React.Component {
  state = { shouldPlay: false };

  componentWillReceiveProps() {
    setImmediate(this.checkWindowHash);
  }

  checkWindowHash = () => {
    const slides = this.props.activeSlides.join('|');
    const shouldPlay = RegExp(`^#[${slides}]$`).test(window.location.hash);
    this.setState({ shouldPlay });
  };

  render() {
    if (!this.state.shouldPlay) return null;

    return (
      <iframe
        allow="autoplay"
        frameBorder="no"
        height="0"
        scrolling="no"
        src={this.props.src}
        width="0"
      />
    );
  }
}

export default Audio;
