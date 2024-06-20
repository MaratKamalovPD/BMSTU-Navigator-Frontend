import React from 'react';
import { 
  useLoaderData, 
  Outlet,
  NavLink,
} from "react-router-dom";
import { getFloorNumbersAndUUIDs } from "../requests/building-data";
import { FloorNavigation }  from '../comonents/floor-navigation.jsx';

export async function loader({params}) {
  const link = 'http://127.0.0.1:5000';
  const buildingId = '8250b9ba-bc0d-4d2f-abf7-d91265e89050'

  const floorsList = await getFloorNumbersAndUUIDs(link, buildingId);

  return {floorsList};
}

export default function Root() {
  const {floorsList} = useLoaderData();
  const floors = floorsList.floors;
  const [floorUUID, setfloorUUID] = React.useState('');

  return (
    <>
      <FloorNavigation floors={floors} />
      <div className="navigation_panel_wrapper">
        <div className="navigation_panel_wrapper__selectors">
            <div>
                <span>Откуда</span>
                <select id="select-from">
                </select>
            </div>
            <div>
                <span>Куда</span>
                <select id="select-to">
                </select>
            </div>            
        </div>
        <button id="search_path">Найти</button>
      </div>
      <div className="scheme_container">
        <div className="scheme">
          <svg id="svg">
            <Outlet context={{floorUUID}} />
          </svg>
        </div>
      </div>
    </>
  )
}