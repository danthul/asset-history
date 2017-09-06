// @ flow

/* @noflow */
export type Alert = {
  idAlert_Event: number,
  idUser_Alert_Def: number,
  idAsset: number,
  idRaw_Data: number,
  Alert_Text: string,
  Created_On: string,
  idLandmark: number,
  idAlert: number,
  idCustomer_Alert: null,
  Notification_Sent: null,
  Notification_Sent_On: null,
  Alert_Message: string,
  idMaintPlan: number,
  Alert_Type: string,
  Event_Timestamp_Local: null,
  Asset_Label: null,
  idDevice: null,
  User_Alert_Defs_Alert_Name: string,
  User_Alert_Defs_Severity_LevelName: null,
  idCustomer: number
};

/* @noflow */
export type BreadcrumbEvent = {
  idEvent_Code: number,
  idDevice: number,
  Event_Type: string,
  idRaw_Data: number,
  Event_Timestamp: string,
  Event_Timestamp_Local: string,
  Event_Date_Local: string,
  Event_Time_Local: string,
  Latitude: number,
  Longitude: number,
  Nearby_Address: string,
  Last_Heading: number,
  Last_Heading_Cardinal: string,
  Last_Speed: number,
  Posted_Speed: number,
  Engine_Speed: number,
  Engine_RPM: number,
  Engine_Odometer: number,
  Coolant_Temp: number,
  GPS_Odometer: number,
  In_Motion: false,
  Alerts: Array<Alert>,
  Total_Engine_Hours: number,
  SensorEvent: string,
  CameraMediaEventIds: string
};
