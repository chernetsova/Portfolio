import React from "react";
import { connect } from "react-redux";
import { State } from "./state";
import AppList from "./components/AppList";
import AppVideo from "./components/AppVideo";
import { IVideoState } from "./interfaces";
import AppRectangle from "./components/AppRectangle";

const App: React.FC<IVideoState> = ({listTimeActions, rectangles}) => {

  let isRectangles = () => typeof rectangles !== 'undefined' && rectangles.length > 0;

  return <>
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l8">
          <div className="video-wrap">
            {
              isRectangles() ? 
              rectangles?.map((rec) =>
                <AppRectangle 
                  key={rec.id}
                  width={rec.zone.width}
                  height={rec.zone.height}
                  left={rec.zone.left}
                  top={rec.zone.top}
                  duration={rec.duration}
                /> 
              )
              :
              null
            }
            
            <AppVideo 
              width={600}
              height={400}
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </div>
        </div>
        <div className="col s12 m12 l4">
          <AppList
            title="Список событий"
            list={listTimeActions}
          />
        </div>
      </div>
    </div>
  </>
}

const mapStateToProps = (state: State) => ({
  listTimeActions: state.video.listTimeActions,
  rectangles: state.api.rectangles
});

export default connect(mapStateToProps, null)(App);
