import { Layout } from 'antd';

// components
import TaskSidebar from '@/components/TaskSidebar';
import AgentSidebar from '@/components/AgentSidebar';
import Map from '@/components/Map';

const { Content } = Layout;

const Pages = props => {

  // useEffect(()=>{
  //   var platform = new window.H.service.Platform({
  //     apikey: 'TdA0eidZ-Oi2OBSBcajq875CpjTy2r-IOSF4SZ3POvQ'
  //   });

  //   var layer = platform.createDefaultLayers();
  //   var container = document.getElementById("map");

  //   var map = new window.H.Map(container, layer.raster.normal.map, {
  //       center: center,
  //       zoom: 18,
  //   })

  //   var events = new window.H.mapevents.MapEvents(map);
  //   // // eslint-disable-next-line
  //   var behavior = new window.H.mapevents.Behavior(events);
  //   // // eslint-disable-next-line
  //   map.addEventListener('pointerenter', function(evt) {
  //       // Log 'tap' and 'mouse' events:
  //       console.log(evt.type, evt.currentPointer.type); 
  //   });
  //   var ui = new window.H.ui.UI.createDefault(map, layer)
  //   var svgMarkup = '<svg width="24" height="24" ' +
  //       'xmlns="http://www.w3.org/2000/svg">' +
  //       '<rect stroke="white" fill="#ff0000" x="1" y="1" width="22" ' +
  //       'height="22" /><text x="12" y="18" font-size="12pt" ' +
  //       'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  //       'fill="white">P</text></svg>';

  //   // Create an icon, an object holding the latitude and longitude, and a marker:
  //   var icon = new window.H.map.Icon(svgMarkup);
  //   var marker = new window.H.map.Marker(center, { icon: icon });

  //   // Add the marker to the map and center the map at the location of the marker:
  //   map.addObject(marker);
  //   map.setCenter(center);
  // }, [])

  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
      <TaskSidebar />
      <Content>
        <Map />
      </Content>
      <AgentSidebar />
    </Layout>
  );
}

export default Pages;
