import {
    What3wordsMap,
    What3wordsAutosuggest,
  } from "@what3words/react-components";

  
  export default function Map() {


    return (
      <What3wordsMap
        id="w3w-map"
        api_key={process.env.REACT_APP_API_KEY}
        map_api_key={process.env.REACT_APP_MAP_API_KEY}
        zoom={18}
        selected_zoom={17}
        lng={-0.114637}
        lat={51.454843}
        search_control_position={2}
        map_type_control={true}
        zoom_control={true}
        fullscreen_control={false}
        fullscreen_control_position={3}
        current_location_control_position={9}
        disable_default_ui={true}
        map_type_id="satellite"
        words="filled.count.soap"
        libraries={["places"]}
      >
        
        <div slot="map" style={{ width: "70%", height: "60vh" }} />
        <div slot="search-control">
        <What3wordsAutosuggest>
            <input type="text" placeholder="///filled.count.soap" />
        </What3wordsAutosuggest>
   </div>
        
      </What3wordsMap>
    );
  }