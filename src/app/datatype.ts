export interface Cab {
  id: number;
  Name: string;
 
  Location: string;
  Battery_Details: {
    Vehicle_Type: string;
    Battery_Percent: string;
    Battery_id: string;
  };
  order_details: string;
  Rating: string;
}
