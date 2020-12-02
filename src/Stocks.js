import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {

    //const {Scrip,Quantity,Price,Avg,InvestedAmount,portfolio,Unrealized,Return } = stockData;
  return (
    <>
      <Header />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                Scrip={data.Scrip}
                Quantity={data.Quantity}
                Price={data.Price}
                Avg={data.Avg}
                InvestedAmount={data.InvestedAmount}
                portfolio={data.portfolio}
                Unrealized={data.Unrealized}
                Return={data.Return}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h2>iShares</h2>
    </header>
  );
};

const Stock = ({ Scrip,Quantity,Price,Avg,InvestedAmount,portfolio,Unrealized,Return }) => {
  if (!Scrip) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
          <b>{Scrip}</b>
          </td>
          <td>
          <p>{Quantity}</p>
          </td>
          <td>
          <p>{Price}</p>
          </td>
          <td>
            <p>{Avg}</p>
          </td>
          <td>
            <p>{InvestedAmount}</p>
          </td>
          <td>
            <p>{portfolio}</p>
          </td>
          <td>
            <p>{Unrealized}</p>
          </td>
          <td>
            <p>{Return}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};