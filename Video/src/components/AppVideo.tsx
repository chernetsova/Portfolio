/** Компонент плейера. */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppVideoProps, IAppVideoState } from "../interfaces";
import { actionCreators } from "../state";
import { IAction } from "../state/actions";

class AppVideo extends React.Component<IAppVideoProps, IAppVideoState> {
  width: number;
  height: number;
  src: string;
  type: string;

  constructor(props: IAppVideoProps) {
    super(props);

    this.width = typeof this.props.width !== "undefined" ? this.props.width : 500;
    this.height = typeof this.props.height !== "undefined" ? this.props.height : 300;
    this.src = this.props.src;
    this.type = typeof this.props.type !== "undefined" ? this.props.type : "video/mp3";

    this.state = {
      play: false
    }

  }

  componentDidMount() {
    const video = document.getElementsByTagName('video')[0];
    const { loadingDataAPIActions, updatePointTimestampActions } = this.props;
      video.addEventListener('timeupdate', function () {
        updatePointTimestampActions(Math.floor(video.currentTime * 1000));
        loadingDataAPIActions();
    }, false);
    video.addEventListener('pause', () => {
      this.saveTimeActions({
        ms: Math.floor(video.currentTime * 1000),
        t: this.convertTimestampToTime(video.currentTime)
      })
  }, false);

  }

  //Обновление состояния плейера.
  updatePlay = (flag: boolean) => {
    this.setState({play: flag});
  }

  //Получение состояния плейера.
  getPlay = () => {
    const {play} = this.state;
    return play;
  }

  //Конвертирование времени остановки плейера 
  //из миллисекунд в человекочитаемую строку.
  convertTimestampToTime(timestamp: number) {
    let millisec = Math.floor(timestamp * 1000);

    let seconds = Math.floor((millisec / 1000) % 60);
    let minutes = Math.floor((millisec / (1000 * 60)) % 60);
    let milli = (((millisec / 1000) % 60) * 1000).toFixed();

    let minutes_text = (m: number) => {
      if ( m < 10 ) {
        return `0${minutes}`
      } else {
        return `${minutes}`
      }
    }

    let second_text = (s: number) => {
      if ( s < 10 ) {
        return `0${seconds}`
      } else {
        return `${seconds}`
      }
    }

    return `${minutes_text(minutes)}:${second_text(seconds)}:${milli}`;

  }

  //Функция сохранения времени остановки плейера в state.
  saveTimeActions(time: {ms: number, t: string}) {
    const { addTimeActions, loadingDataAPIActions, updatePointTimestampActions } = this.props;
    addTimeActions(time);
    updatePointTimestampActions(time.ms)
    loadingDataAPIActions();
  }

  //Функция переключения плейера.
  videoToggle = async () => {
    await this.updatePlay(!this.getPlay());
    const video = document.getElementsByTagName('video')[0];
    if ( this.getPlay() === true ) {
      video.play();
    } else {
      video.pause();
    } 
  }

  render() {
    return <>
      <video 
        controls
        width={this.props.width}
        height={this.props.height} 
        onClick={this.videoToggle}
      >
        <source src={this.props.src} type={this.props.type}></source>
      </video>
    </>
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) =>({
  ...bindActionCreators({ ...actionCreators }, dispatch)
});

export default connect(null, mapDispatchToProps)(AppVideo);
