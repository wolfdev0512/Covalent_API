import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainLayout = styled.div`
  width: 80vw;
  min-height: 600px;
`;

export const Options = styled.div`
  width: 100%;

  padding: 25px 40px;
  box-shadow: 0 0 24px 0 rgba(75, 75, 88, 54%);
  border-radius: 20px;

  border: 1px solid rgba(75, 75, 88, 54%);

  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AddressText = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
export const AddressInput = styled.input`
  border-radius: 10px;
  padding: 5px 10px;
  width: 22vw;
`;

export const Button = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const NetworkContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NetworkText = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
export const NetworkSelect = styled.select`
  border-radius: 10px;
  padding: 5px 10px;
  width: 12vw;
`;
export const NetworkOption = styled.option``;

export const ChartContainer = styled.div`
  width: 100%;
  min-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
