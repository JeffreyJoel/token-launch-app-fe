"use client"

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const CryptoList = () => {
  const [activeTab, setActiveTab] = useState('Coins');

  const cryptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 65844.00,
      change: 3.47,
      icon: 'https://pump.mypinata.cloud/ipfs/QmahrEpzJe2GWy6qFRhCT9TszNbdfCpWEKtEzCkEBuQHhR?img-width=800&img-dpr=2&img-onerror=redirect'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 4000.73,
      change: -7.89,
      icon: 'https://pump.mypinata.cloud/ipfs/QmahrEpzJe2GWy6qFRhCT9TszNbdfCpWEKtEzCkEBuQHhR?img-width=800&img-dpr=2&img-onerror=redirect'
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      change: 0.47,
      icon: 'https://pump.mypinata.cloud/ipfs/QmahrEpzJe2GWy6qFRhCT9TszNbdfCpWEKtEzCkEBuQHhR?img-width=800&img-dpr=2&img-onerror=redirect'
    },
    {
      name: 'Dogecoin',
      symbol: 'bitcoin',
      price: 0.45374,
      change: 3.47,
      icon: 'https://pump.mypinata.cloud/ipfs/QmahrEpzJe2GWy6qFRhCT9TszNbdfCpWEKtEzCkEBuQHhR?img-width=800&img-dpr=2&img-onerror=redirect'
    }
  ];

  const nftData = [
    {
      name: 'Bored Ape',
      symbol: 'BAYC',
      price: 50.5,
      change: 2.3,
      iconColor: 'bg-purple-500',
      icon: '🎨'
    },
    {
      name: 'CryptoPunks',
      symbol: 'PUNK',
      price: 80.2,
      change: -1.5,
      iconColor: 'bg-pink-500',
      icon: '🎮'
    }
  ];

  const activityData = [
    {
      name: 'Sent Bitcoin',
      symbol: 'BTC',
      price: 0.5,
      change: 0,
      iconColor: 'bg-orange-500',
      icon: '↗'
    },
    {
      name: 'Received ETH',
      symbol: 'ETH',
      price: 2.1,
      change: 0,
      iconColor: 'bg-blue-500',
      icon: '↙'
    }
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'NFTs':
        return nftData;
      case 'Activity':
        return activityData;
      default:
        return cryptoData;
    }
  };

  const tabs = ['Coins', 'NFTs', 'Activity'];

  return (
    <div className=" p-4 mt-32 text-white">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-emerald-400 border-b-2 border-emerald-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
          <Plus size={24} />
        </button>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {getActiveData().map((item, index) => (
          <div 
            key={`${item.symbol}-${index}`}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10  rounded-full flex items-center justify-center text-white font-bold`}>
            <img src={item.icon} alt='' height={200} width={200}/>
              </div>
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">
                ${item.price.toLocaleString(undefined, {
                  minimumFractionDigits: item.price < 1 ? 5 : 2,
                  maximumFractionDigits: item.price < 1 ? 5 : 2,
                })}
              </div>
              {item.change !== 0 && (
                <div className={`text-sm ${item.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {item.change >= 0 ? '+' : ''}{item.change}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;