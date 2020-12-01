import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.pages";
import Login from "./Pages/Login/Login.pages";
import Register from "./Pages/Register/Register.pages";
import ClientEntries from "./Pages/ClientEntries/ClientEntries.pages.jsx";
import ClientEntry from "./Pages/ClientEntry/ClientEntry.pages";
import Client from "./Pages/Client/Client.pages";
import InsuranceApplicationEntries from "./Pages/InsuranceApplications/InsuranceApplications.pages";
import InsuranceEntry from "./Pages/InsuranceEntry/InsuranceEntry.pages";
import InsuranceUpdate from "./Pages/InsuranceUpdate/InsuranceUpdate.pages";
import MeetingEntries from "./Pages/MeetingEntries/MeetingEntries.pages";
import MeetingEntry from "./Pages/MeetingEntry/MeetingEntry.pages";
import MeetingUpdate from "./Pages/MeetingUpdate/MeetingUpdate.pages";
import SureDelete from "./Pages/SureDelete/SureDelete.pages";
import EditAgent from './Pages/EditAgent/EditAgent.pages'
import EditClient from './Pages/EditClient/EditClient.pages'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.pages'
import ResetPassword from './Pages/ResetPassword/ResetPassword'

export default (
  <BrowserRouter>
    <Switch>
      {/* Landing page */}
      <Route exact path="/">
        <Landing />
      </Route>
      {/* Login page */}
      <Route exact path="/login">
        <Login />
      </Route>
      {/* Register page */}
      <Route exact path="/register">
        <Register />
      </Route>
      {/* Agent dashboard with all client entries in a list */}
      <Route exact path="/dashboard">
        <ClientEntries />
      </Route>
      {/* Creation of a new client */}
      <Route exact path="/dashboard/new">
        <ClientEntry />
      </Route>
      {/* Client dashboard, with client info and links to Insurance entries and Meeting entries, will have redux set up with Client id, and user Id being pulled from auth/me in the header */}
      <Route exact path="/client/:id">
        <Client />
      </Route>
      {/* Dashboard with Client name in header, and all associated Insurance applications */}
      <Route exact path="/client/:id/application">
        <InsuranceApplicationEntries />
      </Route>
      {/* New Insurance application */}
      <Route exact path="/client/:id/application/new">
        <InsuranceEntry />
      </Route>
      {/* Update Insurance application */}
      <Route exact path="/client/:id/application/:applicationId">
        <InsuranceUpdate />
      </Route>
      {/* Dashboard with Client name in header, and all associated meeting notes */}
      <Route exact path="/client/:id/meeting">
        <MeetingEntries />
      </Route>
      {/* New Meeting Notes */}
      <Route exact path="/client/:id/meeting/new">
        <MeetingEntry />
      </Route>
      {/* Update Meeting Notes */}
      <Route exact path="/client/:id/meeting/:meetingId">
        <MeetingUpdate />
      </Route>
      {/* Are you sure you want to delete? Will have a redux option everytime we mount we either mount application or insurance and every detail thats needed like meeting id or insuranceId */}
      <Route exact path="/client/:id/sureDelete">
        <SureDelete />
      </Route>
      {/* Forgot Password */}
      <Route exact path="/forgotPassword">
        <ForgotPassword />
      </Route>
      {/* Reset Password */}
      <Route exact path="/resetPassword">
        <ResetPassword />
      </Route>
      {/* Edit Agent Form */}
      <Route exact path="/dashboard/edit">
        <EditAgent />
      </Route>
      {/* Edit Client Form */}
      <Route>
        <EditClient />
      </Route>
    </Switch>
  </BrowserRouter>
);

// prone to change
