import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          {/*<a href="#" onClick={deselectAlbum}>ALBUMS</a>*/}
            <Link to="/albums">ALBUMS</Link>
            {/*<Link to={`/albums/${someAlbumId}`}>Go to an Album</Link>*/}
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
