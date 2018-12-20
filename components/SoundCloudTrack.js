import React, { PureComponent } from 'react';

class Audio extends React.Component {
  state = { shouldPlay: false };

  componentWillReceiveProps() {
    setImmediate(this.checkWindowHash);
  }

  checkWindowHash = () => {
    // const slides = this.props.activeSlides.join('|');
    // const shouldPlay = RegExp(`^#[${slides}]$`).test(window.location.hash);
    const currentSlide = Number(window.location.hash.replace('#', '') || 0);

    console.log('currentSlide:', currentSlide);
    console.log('activeSlides:', this.props.activeSlides);

    this.setState({
      shouldPlay: this.props.activeSlides.includes(currentSlide)
    });
  };

  render() {
    if (!this.state.shouldPlay) return null;

    return (
      <iframe
        allow="autoplay"
        frameBorder="no"
        height="0"
        scrolling="no"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
          this.props.trackID
        }&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
        width="0"
      />
    );
  }
}

export default Audio;
