/** Компонент прямоугольника  */
import React from "react";
import { connect } from "react-redux";
import { IRectangleProp, IRectangleState} from "../interfaces";
import { Transition } from "react-transition-group";

class AppRectangle extends React.Component<IRectangleProp, IRectangleState> {
  id: number;

  constructor(props: IRectangleProp) {
    super(props);

    this.id = Date.now();
    this.state = {
      animate: false
    }
  }

  async componentDidMount() {
    const video = document.getElementsByTagName('video')[0];
    const timeStart = video.currentTime * 1000;
    const timeStop = timeStart + this.props.duration;
    await this.setState({animate: true});
    await video.addEventListener('timeupdate', () => {
      if (video.currentTime > timeStop) {
        this.setState({animate: false});
      }
    })
  }

  getStateAnimate() {
    let { animate } = this.state
    return animate;
  }

  render() {
    const defaultStyle = {
      transition: `opacity ${this.props.duration}ms ease-in-out`,
      width: this.props.width,
      height: this.props.height,
      left: this.props.left,
      top: this.props.top,
      opacity: 0,
    }  
    const transitionStyles: { [id: string]: React.CSSProperties } = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    };  
    return <>
      <Transition
        in={this.getStateAnimate()}
        timeout={this.props.duration}
        mountOnEnter
        unmountOnExit
      >
        {
          (state) =>  (
            <div 
              id={"rectangle-"+this.id} 
              className={`rectangle ${state} light-green accent-4`}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            ></div>
          )
        }
      </Transition>
     
    </>
  }
}

export default connect(null, null)(AppRectangle);