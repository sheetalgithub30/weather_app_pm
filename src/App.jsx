import React from "react";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const city = [
  {
    id: 1,
    name: "New York",
    value: false,
  },
  {
    id: 2,
    name: "Las Vegas",
    value: false,
  },
  {
    id: 3,
    name: "Los Angeles",
    value: false,
  },
  {
    id: 4,
    name: "London",
    value: false,
  },
];

function App() {
  const [citydata, setCityData] = useState(city);
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const[search,setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, [cityName]);


  useEffect(()=>{
    const id = setTimeout(()=>{
      let new_arr =[...data]
      new_arr.map((e)=>{
          if(e.cityName == search){
            e.search =false
          }})
          setData([...data])
    },3000)
    return ()=>{
        clearTimeout(id);
    }
 },[data])

  async function fetchData() {
    if (cityName == "") {
      return;
    }
    const response = await fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
    );
    const result = await response.json();
    let new_result = { ...result, cityName: cityName, search: false };
    setData([...data, new_result]);
  }

  function getWeather() {
    let new_arr = [...citydata];
    let find = new_arr.find((ele) => {
      return ele.value == false;
    });
    if (find == undefined) {
      return;
    }
    //  console.log(find)
    setCityName(find.name);
    new_arr.map((e) => {
      if (e.id == find.id) {
        e.value = true;
      }
    });

    setCityData(new_arr);
  }


  function setBackground(){
    console.log(search)
    let new_arr = [...data];
     new_arr.map((e)=>{
    //  console.log("ename",e.cityName)
      if(e.cityName == search){
        e.search =true
      }
    });
    setData([...data])

  }



  return (
    <div className="border-b-2 border-gray-500">
      <div className="bg-blue-600">
        <h1 className="text-center text-white text-xl p-7 font-medium">
          Weather App
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center w-[20%]">
          <button
            className="bg-blue-600 p-4 m-2  text-white rounded-xl w-[70%] "
            onClick={getWeather}
          >
            Get Weather
          </button>
          <div className="w-[70%]">
            <li className="list-none  bg-blue-600 p-2 text-white">City</li>
            {citydata.map((data, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    data.value ? "border-[4px] border-lime-500" : ""
                  } list-none border-[1px] border-black p-2`}
                >
                  {data.name}
                </li>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-black h-[80vh]"></div>
        <div className="w-[88%] mx-20 my-2 max-sm:mx-10">
          <div className="flex justify-end max-sm:justify-center">
            <input
              type="text"
              placeholder="City Name"
              className="border-2 rounded-s-xl border-black w-[40%] p-3"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            ></input>
            <button 
            onClick={setBackground}
            className="bg-blue-600 text-white  w-[8%] flex justify-center items-center">
              <IoSearch className="text-2xl" />
            </button>
          </div>
          <div className="mt-5">
            <New
              data={data}
              setData={setData}
              cityName={cityName}
              setCityData={setCityData}
              citydata={citydata}
              // search={search}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function New({ data, setData,setCityData, citydata}) {
  function del(index, city) {
    let new_arr = [...data];
    setData(
      new_arr.filter((e, ind) => {
        return ind !== index;
      })
    );

    let new_data = [...citydata];
    new_data.map((ele) => {
      if (ele.name == city) {
        // console.log(city)
        ele.value = false;
      }
    });
    // console.log(new_data)
    setCityData(new_data);
  }

  console.log("data",data)
  return (
    <div className="">
      <div className="border-2 border-black">
        <table className="w-full font-medium">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-slate-700 ">City</th>
              <th className="border border-slate-700">Description</th>
              <th className="border border-slate-700">Temperature</th>
              <th className="border border-slate-700">Pressure</th>
              <th className="border border-slate-700">Data age(hrs)</th>
              <th className="border border-slate-700 py-5 max-md:py-2">
                <MdDeleteForever />
              </th>
            </tr>
          </thead>

          {data.map((e, index) => {
            let date = new Date(e.date_and_time);
            let duration = Date.now() - date;
           let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
            return (
              <tbody key={index}>
                <tr className={`${e.search ? "bg-yellow-400" : ""}`}>
                  <td className="border border-slate-700">{e.cityName}</td>
                  <td className="border border-slate-700">{e.description}</td>
                  <td className="border border-slate-700">
                    {e.temp_in_celsius}
                  </td>
                  <td className="border border-slate-700">
                    {e.pressure_in_hPa}
                  </td>
                  <td className="border border-slate-700">{hours}</td>
                  <td className="border border-slate-700 py-5 max-md:py-2">
                    <button onClick={() => del(index, e.cityName)}>
                      <u className="text-red-700">
                        <MdDeleteForever />
                      </u>
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>

        {data.length == 0 && (
          <h1 className="text-2xl font-bold text-center">No Data</h1>
        )}
      </div>
    </div>
  );
}
