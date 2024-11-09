"use client";
import carIcon from '@/images/carIcon.jpg';
import techIcon from '@/images/techIcon.jpg';
import sportIcon from '@/images/sportIcon.jpg';
import fashinonIcon from '@/images/fashinonIcon.jpg';
import cryptoIcon from '@/images/cryptoIcon.jpg';
import marketIcon from '@/images/marketIcon.jpg';
import othersIcon from '@/images/othersIcon.jpg';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { log } from 'console';

type btnsType = {
  name: string,
  icon: StaticImageData
}

const btns:btnsType[] = [
  {
    name: 'Cars',
    icon: carIcon,
  },
  {
    name: 'Technology',
    icon: techIcon,
  },
  {
    name: 'Sport',
    icon: sportIcon,
  },
  {
    name: 'Fashion',
    icon: fashinonIcon,
  },
  {
    name: 'Crypto',
    icon: cryptoIcon,
  },
  {
    name: 'Market',
    icon: marketIcon,
  },
  {
    name: 'Others',
    icon: othersIcon,
  },
]


export default function Home() {
  const [activeBtn, setActiveBtn] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const btnsHandler = (btnName : string) => {
    setActiveBtn(btnName);
  };

  useEffect(() => {
    if(!userEmail || !activeBtn){
      setBtnDisable(true)
      return
    };

    setBtnDisable(false);
  },[userEmail, activeBtn]);

  useEffect(() => {
    const testEmeil = /^\w+@[a-z]{4,5}\.[a-z]{2,}$/;
    console.log(testEmeil.test(userEmail));
    
  }, [userEmail]);


  return (
    <div className="grid place-items-center h-dvh">
      <header className="border-2 w-96 h-106 rounded-lg p-4 flex flex-col gap-9">
        <h1 className="text-center text-4xl font-bold">Chat App</h1>
        <input 
          onChange={(e) => setUserEmail(e.target.value)} 
          type="text" 
          placeholder="Please enter your email" 
          className="border-2 w-full p-2 rounded-lg outline-none" 
          />
        <div>
          <p>Please choose on of the topics below that you want to discuss about..</p>
          <ul className='flex flex-wrap gap-4'>
            {btns.map( (btn, i) => (
              <li 
              onClick={() => btnsHandler(btn.name)} 
              key={i} 
              className={`border-2 flex gap-3 p-1 rounded-lg hover:cursor-pointer hover:border-red-200 
                ${activeBtn === btn.name ? "border-red-900" : ""}`}
              >
                <span>{btn.name}</span>
                <Image src={btn.icon} alt="btn icon" width={25} height={25} />
              </li>
            ))}
          </ul>
        </div>

        <button 
        disabled={btnDisable} 
        className={`${btnDisable ? "text-gray-400 hover:cursor-not-allowed" : "hover:cursor-pointer border-green-500 text-green-700"} border-2 p-2 rounded-lg text-2xl`}
        >
          Join In
        </button>
      </header>
    </div>
  );
}
