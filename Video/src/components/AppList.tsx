/** Компонент для вывода списка  */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppListProps } from "../interfaces";
import { actionCreators } from "../state";
import { IAction } from "../state/actions";

class AppList extends React.PureComponent<IAppListProps> {

  isList(): boolean {
    return typeof this.props.list !== 'undefined' && this.props.list.length > 0;
  }

  isTitle(): boolean {
    return typeof this.props.title !== 'undefined' && this.props.title.length > 0;
  }

  createTitle(): string {
    return this.isTitle() ? this.props.title : 'Список';
  }

  switchVideo(ms: number) {
    const video = document.getElementsByTagName('video')[0];
    const { loadingDataAPIActions, updatePointTimestampActions } = this.props;
    video.currentTime = ms/1000;
    updatePointTimestampActions(ms);
    loadingDataAPIActions();
  }

  render() {
    return <>
        <h5 className="center-align">{this.createTitle()}</h5>
        {
          this.isList() ?
            <ol className="center-align">
              {
                this.props.list?.map((item) => 
                  <li key={item.ms} data-ms={item.ms} onClick={() => this.switchVideo(item.ms)}>{item.t}</li>
                )
              }
            </ol>
          :
          <p className="center-align">
            <i className="text-gray">Список пуст</i>
          </p>
          
        }
    </>
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) =>({
  ...bindActionCreators({ ...actionCreators }, dispatch)
});

export default connect(null, mapDispatchToProps)(AppList)