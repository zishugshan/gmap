import Location  from "./components/Location";
function App() {

  let locations = [
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    },
    {
      lat1:12.3406,
      long1:17.5678,
      lat2:12.3406,
      long2:17.5678,
      psp:1000200390
    }
    
  ]
  const onSelect = (item)=>{
    console.log(item)
  }
  return (
    <div>
      <Location locn={locations}/>
    </div>
  );
}

export default App;