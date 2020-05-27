import React, { useState, useEffect, useRef, createRef } from 'react';

const Map = () => {

  let mapObj = null;
  var defaultCoord = [10.7743, 106.6669]; // coord mặc định, 9 giữa HCMC
  var zoomLevel = 13;
  var mapConfig = {
      attributionControl: false, // để ko hiện watermark nữa, nếu bị liên hệ đòi thì nhớ open nha
      center: defaultCoord, // vị trí map mặc định hiện tại
      zoom: zoomLevel, // level zoom
  };

  const [randomCoord, setRandomCoord] = useState({lat: 10.77, lng: 106.66})
  const [map, setMap] = useState(null);
  const [data, setData] = useState(null);
  const mapRef = createRef()
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('seconds', seconds);
  //     setSeconds(seconds => seconds + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [seconds]);

  useEffect(() => {
    initMap(); 
    // const interval = setInterval(() => {
    //   // console.log('randomCoord', randomCoord)
    //   fetchAPI();
      
    //   console.log('randomCoord',randomCoord);
    // }, 5000);
    // return () => clearInterval(interval);
  }, [])

  // console.log('map',map)

  // console.log('mapRef', mapRef.current);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('randomCoord', randomCoord)
  //     setRandomCoord(prevRandomCoord => {
  //       return {
  //         lat: prevRandomCoord.lat + 0.001,
  //         lng: prevRandomCoord.lng + 0.001,
  //       }
  //     }
  //   )}, 5000);
  //   return () => clearInterval(interval);
  // }, [randomCoord]);
  async function fetchAPI() {
    try {
      const res = await fetch('https://wanderdrone.appspot.com/');
      const res1 = await res.json();
      const [lat, lng] = res1.geometry.coordinates;
      setRandomCoord({lat, lng});
      // console.log('randomCoord', [lat, lng]);
      // console.log('map', map);
      setData(res1);
      window.L.marker([lat, lng]).addTo(map);
      return res1;
    } catch (error) {
      console.log(error);
    }
  }

  // console.log('mapObj', mapObj)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // console.log('randomCoord', randomCoord)
  //     const a = fetchAPI();
  //     // window.L.marker(a).addTo(map);
  //     console.log('randomCoord',randomCoord);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [map])

  const onClickABC = () => {
    // setRandomCoord({lat: randomCoord.lat + 0.001, lng: randomCoord.lng + 0.001})
    // addMarker([randomCoord.lat,randomCoord.lng]);
    // console.log('randomCoord',randomCoord);
    // const interval = setInterval(setRandomCoord((prevRandomCoord) => {
    //   console.log('randomCoord', randomCoord)
    //   return {
    //     lat: prevRandomCoord.lat + 0.001,
    //     lng: prevRandomCoord.lng + 0.001,
    //   }
    // }), 1000);
    // return () => clearInterval(interval);
    setRandomCoord(prev => {
      return {
        lat: prev.lat + 0.001,
        lng: prev.lng + 0.001,
      }
    })
    window.L.marker([randomCoord.lat, randomCoord.lng]).addTo(map)

  }

 
  const initMap = () => {
    // init map
    mapObj = window.L.map('mapid', mapConfig);
    setMap(mapObj);
    // add tile để map có thể hoạt động, xài free từ OSM
    window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapObj);
    
    // tạo marker
    var popupOption = {
      className: "map-popup-content",
    };
    addMarker([10.7742, 106.6665], `<div class='left'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SGNN50inDZcOweium4llf4qacFBFgBK9sXW7fxQ_lBm6-Abcww' /></div><div class='right'><b>Đây có gì hot?</b><br>Một Popup có 1 cô gái tên là Lailah</div><div class='clearfix'></div>`, popupOption);
  }

  function addMarker(coord, popupContent, popupOptionObj, markerObj) {
    if (!popupOptionObj) {
        popupOptionObj = {};
    }
    if (!markerObj) {
        markerObj = {};
    }
    
    var marker = window.L.marker(coord, markerObj).addTo(mapObj); 
    var popup = window.L.popup(popupOptionObj);
    popup.setContent(popupContent);
    
    // binding  
    marker.bindPopup(popup);
    
    return marker;
  }	

  return (
    <React.Fragment>
      <div id="mapid" style={{ height:'calc(100vh - 64px)' }} ref={mapRef}></div>
      <button onClick={onClickABC}>abc</button>
    </React.Fragment>
  )
};

export default Map;
