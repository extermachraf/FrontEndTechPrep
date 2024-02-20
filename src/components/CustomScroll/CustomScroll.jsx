import React, { useEffect, useState } from "react";
import "./customScroll.css";

const CustomScroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPourcentage, setScrollPourcentage] = useState(0);


  async function fetchData(getUrl) {
    try {
      setLoding(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoding(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoding(false);
    }

  }

  useEffect(() => {
    fetchData(url);
  }, [url])


  function handleScrollPourcentage() {
    const HowMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPourcentage((HowMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPourcentage);
    return () => {
      window.removeEventListener('scroll', () => { });
    }
  }, [])

  if (loding) return <p>Loading...</p>

  return <div className="">
    <div className="take-all">
      <h1>Custom Scroll Indicatore</h1>
      <div className="scroll-progress-container">
        <div className="curent-progress" style={{ width: `${scrollPourcentage}%` }}></div>
      </div>
    </div>
    <div className="data-container">
      {
        data && data.length > 0 ?
          data.map((item, index) => {
            return <div key={index} className="data-item">
              <h3>{item.title}</h3>
            </div>
          }) : <p>{errorMessage}</p>
      }
    </div>
  </div>;
};

export default CustomScroll;
