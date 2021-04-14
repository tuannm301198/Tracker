import * as React from 'react';
import { EnvironmentFilled } from '@ant-design/icons';
export const DisplayMap = props => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: 'xCAN9C37OfXcvdMpJuJknB8Yg_ANhv0xmGM5ZjdMaas',
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 21.002708, lng: 105.820664 },
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1,
    });
    const routingParameters = {
      routingMode: 'fast',
      transportMode: 'car',
      // The start point of the route:
      origin: '21.017943,105.829841',
      // The end point of the route:
      destination: '21.024927,105.860281',
      // Include the route shape in the response
      return: 'polyline',
    };

    // Define a callback function to process the routing response:
    const onResult = function(result) {
      // ensure that at least one route was found
      if (result.routes.length) {
        result.routes[0].sections.forEach(section => {
          // Create an icon, an object holding the latitude and longitude, and a marker:
          let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

          // Create a polyline to display the route:
          let routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: '#65c1c2', lineWidth: 6 },
          });

          // Create a marker for the start point:
          let startMarker = new H.map.Marker(section.departure.place.location);

          // Create a marker for the end point:
          let endMarker = new H.map.Marker(section.arrival.place.location);

          // Add the route polyline and the two markers to the map:
          map.addObjects([routeLine, startMarker, endMarker]);

          // Set the map's viewport to make the whole route visible:
          map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
        });
      }
    };

    // Get an instance of the routing service version 8:
    const router = platform.getRoutingService(null, 8);

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult, function(error) {
      alert(error.message);
    });
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      map.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return <div className="map" ref={mapRef} style={{ height: props.height }} />;
};
