
"use client"
import { Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";

const postsData = [{
  image: "/logo-color.svg",
  title: "Welcome back Your name should be added",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  latitude: 13.160700,
  longitude: 74.763069

},
{
  image: "/logo-color.svg",
  title: "Welcome back Your name should be added",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  latitude: 13.78000,
  longitude: 75.834183

},
{
  image: "/logo-color.svg",
  title: "Welcome back Your name should be added",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  latitude:  14.78000,
  longitude: 74.5634183

},{
  image: "/logo-color.svg",
  title: "Welcome back Your name should be added",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  latitude:  15.578000,
  longitude: 74.834183

}]

const Map: React.FC= () => {
  const customIcon = new L.Icon({
    iconUrl: "/marker-icon-2x.png",
    iconSize: [25, 41],
  });

  return (
    <MapContainer
      style={{ width: "100%", height: "100dvh", zIndex: 0 }}
      center={[postsData[Math.floor(postsData.length / 2)].latitude, postsData[Math.floor(postsData.length / 2)].longitude]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {postsData.map((post, index) => {
        return (
          <Marker
            key={index}
            position={[post.latitude, post.longitude]}
            icon={customIcon}
          >
            <Popup
              className="bg-white bg-opacity-75 backdrop-blur-xs shadow-glass p-4 rounded-lg"
              closeButton={true}
            >
              <div className="w-fit h-[25rem] flex flex-col justify-between ">
                
                <h1 className="text-lg font-bold">{post.title}</h1>
                <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={80}
                    className="w-full h-1/4 object-cover  rounded-lg"
                  />
                <span className="text-lg">{post.description}</span>

                <div>
                  <div className="flex justify-between w-full text-xs text-slate-400">
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-bold text-center">Posted at</span>

                    </div>


                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}

    </MapContainer>
  )
}

export default Map;