import React, { useEffect, useState } from "react";
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import "./Client.pages.css";

const ClientEntries = (props) => {
  const [clients, setClients] = useState([])
  const [clientCopy, setClientCopy] = useState([])
  const [clientCopy2, setClientCopy2] = useState('')

  useEffect(() => {
    axios.get(`/clients/${props.auth.user.agent_id}`).then((res) => {
      setClients(res.data)
      setClientCopy(res.data)
      setClientCopy2(res.data)
    })
  }, [props])

  return (
    <>
      <Header left="agent name" r="Add New Client" middle="Edit Agent Profile" logout="Logout" linkR="/dashboard/new" linkMiddle="/dashboard/edit" />
      <div className="client-entries">
        <input className="margins-bottom margins-tops search-box" onChange={(e) => {
          if (e.target.value === "") {
            setClients(clientCopy)
          } else {
            const newClients = clientCopy.filter((el) => {
              return el.name.includes(e.target.value)
            })
            setClients(newClients)
            setClientCopy(clientCopy2)
          }
        }} placeholder="Search" />
        <div className="sorter">
          <button onClick={() => {
            axios.get(`/clientsAlphabet/${props.auth.user.agent_id}`).then((res) => {
              setClients(res.data)
            })
          }} className="sort-button" >Sort By Alphabet</button>
          <button onClick={() => {
            axios.get(`/clientId/${props.auth.user.agent_id}`).then((res) => {
              setClients(res.data)
            })
          }} className="sort-button">Sort By Most Recent</button>
        </div>
        <div className="client-entries-box-1">
          {clients.map((el, i) => {
            return <div onClick={() => {
              props.history.push(`/client/${el.client_id}/application`) //push id here
            }} className="client-one-1">
              <img className="client-icon" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NiwxMC4zMmMtMTkuMDQwOTQsMCAtMzQuNCwxNS4zNTkwNiAtMzQuNCwzNC40djIwLjY0YzAsMTEuMTM5NjkgNS40NTU2MywyMS4xMzcxOSAxMy43NiwyNy40MTI1djE1LjU4NzVjMCwwLjM2MjgxIC0wLjA2NzE5LDAuNjcxODggLTAuOTY3NSwxLjUwNWMtMC45MDAzMSwwLjgzMzEzIC0yLjQ5OTM3LDEuOTQ4NDQgLTQuNjIyNSwzLjAxYy00LjIzMjgxLDIuMTIzMTMgLTEwLjM0Njg3LDQuMyAtMTYuNTU1LDcuMzFjLTYuMjA4MTIsMy4wMSAtMTIuNjQ0NjksNi44Mzk2OSAtMTcuNjMsMTIuMzYyNWMtNC45ODUzMSw1LjUyMjgxIC04LjM4NSwxMi45MjY4OCAtOC4zODUsMjIuMjUyNXYzLjQ0aDEzNy42di0zLjQ0YzAsLTkuNDA2MjUgLTMuMzk5NjksLTE2LjgzNzE5IC04LjM4NSwtMjIuMzZjLTQuOTg1MzEsLTUuNTIyODEgLTExLjQyMTg3LC05LjI4NTMxIC0xNy42MywtMTIuMjU1Yy02LjIwODEyLC0yLjk2OTY5IC0xMi4zMzU2MiwtNS4yMTM3NSAtMTYuNTU1LC03LjMxYy0yLjEwOTY5LC0xLjA0ODEyIC0zLjczNTYyLC0yLjA2OTM3IC00LjYyMjUsLTIuOTAyNWMtMC44ODY4NywtMC44MzMxMiAtMC45Njc1LC0xLjE4MjUgLTAuOTY3NSwtMS42MTI1di0xNS41ODc1YzguMzA0MzgsLTYuMjc1MzEgMTMuNzYsLTE2LjI3MjgxIDEzLjc2LC0yNy40MTI1di0yMC42NGMwLC0xOS4wNDA5NCAtMTUuMzU5MDYsLTM0LjQgLTM0LjQsLTM0LjR6TTg2LDE3LjJjMTUuMzU5MDYsMCAyNy41MiwxMi4xNjA5NCAyNy41MiwyNy41MnYyMC42NGMwLDkuNDg2ODggLTQuOTU4NDQsMTguMDMzMTMgLTEyLjI1NSwyMi44OTc1bC0xLjUwNSwxLjA3NXYxOS4wMjc1YzAsMi42NjA2MyAxLjM3MDYzLDUuMDEyMTkgMy4xMTc1LDYuNjY1YzEuNzQ2ODgsMS42NTI4MSAzLjkzNzE5LDIuODg5MDYgNi4zNDI1LDQuMDg1YzQuODEwNjMsMi4zOTE4OCAxMC43MjMxMyw0LjUxNSAxNi41NTUsNy4zMWM1LjgzMTg4LDIuNzk1IDExLjQzNTMxLDYuMTY3ODEgMTUuNDgsMTAuNjQyNWMzLjM1OTM4LDMuNzA4NzUgNS4zMDc4MSw4LjQ2NTYzIDYuMDIsMTQuMjk3NWgtMTIyLjU1YzAuNzEyMTksLTUuNzY0NjkgMi42NzQwNiwtMTAuNDY3ODEgNi4wMiwtMTQuMTljNC4wNDQ2OSwtNC40ODgxMiA5LjY0ODEzLC03LjkxNDY5IDE1LjQ4LC0xMC43NWM1LjgzMTg4LC0yLjgzNTMxIDExLjc1NzgxLC01LjAyNTYyIDE2LjU1NSwtNy40MTc1YzIuMzkxODgsLTEuMTk1OTQgNC42MDkwNiwtMi40NTkwNiA2LjM0MjUsLTQuMDg1YzEuNzMzNDQsLTEuNjI1OTQgMy4xMTc1LC0zLjkxMDMxIDMuMTE3NSwtNi41NTc1di0xOS4wMjc1bC0xLjUwNSwtMS4wNzVjLTcuMjk2NTYsLTQuODY0MzcgLTEyLjI1NSwtMTMuNDEwNjIgLTEyLjI1NSwtMjIuODk3NXYtMjAuNjRjMCwtMTUuMzU5MDYgMTIuMTYwOTQsLTI3LjUyIDI3LjUyLC0yNy41MnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
              <p className="client-name-entries">{el.name}</p>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    auth: reduxState.auth
  }
}

export default connect(mapStateToProps)(withRouter(ClientEntries));
