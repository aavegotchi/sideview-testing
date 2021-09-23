import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./layout.css"

interface Props {
  rpc: string;
  setRpc: (rpc: string) => void;
  children: React.ReactNode;
  navigation: Array<{
    title: string;
    path: string;
  }>
}

export const Layout = ({ rpc, setRpc, children, navigation }: Props) => {
  const [rpcInput, setRPCInput] = useState("");

  return (
    <div className="layout-container">
      <div className="header">
        <div className="container">
          <p>Current RPC: {rpc ? rpc : "Metamask"}</p>
              <label htmlFor="rpc">RPC URL:</label>
              <input name="rpc" value={rpcInput} onChange={(e) => setRPCInput(e.target.value)}></input>
              <button onClick={() => setRpc(rpcInput)}>Set RPC</button>
          </div>
        </div>
      <div className="body">
        <nav className="sidebar-container">
          <ul className="sidebar">
            {navigation.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path} exact activeClassName="active">{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="content-container">
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}