import React, { useState, useEffect } from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MainLayout,
  Options,
  AddressContainer,
  AddressText,
  AddressInput,
  NetworkContainer,
  NetworkText,
  NetworkSelect,
  NetworkOption,
  ChartContainer,
  Button,
} from "./Hero.styled";

// @component
import { BarChart } from "components/Chart";

// @assets
import LineChartLoaderSVG from "assets/svg/loading";

// @axios
import axios from "axios";
// ----------------------------------------------------------

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [networkList, setNetworkList] = useState<any>();
  const [chainId, setChainId] = useState(1);
  const [address, setAddress] = useState("");
  const [chartData, setChartData] = useState<any>([]);
  const API_KEY = "ckey_1b099dcb14c14c3cb866b6f8073";

  const changeNetwork = (event: any) => {
    setChainId(event.target.value);
  };

  const changeAddress = (event: any) => {
    if (event.target.value.length === 42) {
      setAddress(event.target.value);
    }
  };

  const getChartData = async (address: string, chainId: number) => {
    const tempState = await axios.get(
      `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}`
    );
    console.log(tempState.data);
    let array: { name: any; data: string }[] = [];
    tempState.data.data.items.map((item: any) => {
      let temp = {
        name: item.contract_ticker_symbol,
        data: (
          (Number(item.balance) * Number(item.quote_rate)) /
          Math.pow(10, Number(item.contract_decimals))
        ).toFixed(2),
      };
      array.push(temp);
    });
    setChartData(array);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      const temp = await axios.get(
        `https://api.covalenthq.com/v1/chains/?key=${API_KEY}`
      );
      setNetworkList(temp.data.data.items);
    })();
  }, []);

  useEffect(() => {
    if (address !== "") {
      setLoading(true);
      getChartData(address, chainId);
    }
  }, [address, chainId]);

  return (
    <Layout>
      <MainLayout>
        <Options>
          <AddressContainer>
            <AddressText>Wallet Address:</AddressText>
            <AddressInput
              placeholder="your wallet address"
              onChange={changeAddress}
            ></AddressInput>
          </AddressContainer>
          <NetworkContainer>
            <NetworkText>Network:</NetworkText>
            <NetworkSelect onChange={changeNetwork}>
              {networkList &&
                networkList.map((item: any, index: number) => (
                  <NetworkOption key={index} value={item.chain_id}>
                    {item.name}
                  </NetworkOption>
                ))}
            </NetworkSelect>
          </NetworkContainer>
        </Options>
        <ChartContainer>
          {loading ? <LineChartLoaderSVG /> : <BarChart data={chartData} />}
        </ChartContainer>
      </MainLayout>
    </Layout>
  );
};

export default Hero;
