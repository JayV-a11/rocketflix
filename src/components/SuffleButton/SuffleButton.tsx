import React, { FunctionComponent } from "react";
import { useDispatch } from 'react-redux'
import * as actions  from "../../store/action-creators";

const SuffleButton: FunctionComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({type: "SET_MOVIE_ID_REQUEST", payload: 550});
        }}
      >
        MOVIE
      </button>
    </div>
  );
};

export default SuffleButton;
