import React, { useState } from "react";
import { View, Text, Button, CheckBox } from "react-native";
const Iziphumo = (props) => {
  const [check, setCheck] = useState(false);
  const [checkk, setCheckk] = useState(false);
  const [check3, setCheck3] = useState(false);
  const handleDelete = (val) => {
    props.delete(val);
  };
  const mappedData = props.data.map((val, i) => {
    if (i > 0 && val.prio == "High" || val.prio == "high") {
      if (check == false) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin:'3px', backgroundColor: "red",
            }}
          >
            <View
              style={{ flexDirection: "row", width: "84%", margin: "4px", paddingLeft:50}}
            >
              <CheckBox
                value={check}
                onValueChange={setCheck}
                style={{ margin: "4px" ,marginTop:'13px'}}
              />
              <View style={{ width: "90%" }}>
                <Text style={{paddingLeft:5, fontSize:27,fontWeight:600,fontFamily: "Montserrat", color:'white'}}>{val.items}</Text>
              </View>
            </View>
            <Button onPress={() => handleDelete(val.items)} title="delete" />
          </View>
        );
      }
      if (check == true) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin:'3px', backgroundColor: "red",
            }}
          >
            <View
              style={{ flexDirection: "row", width: "84%", margin: "4px", paddingLeft:50 }}
            >
              <CheckBox
                value={check}
                onValueChange={setCheck}
                style={{ margin: "4px", marginTop: "13px"}}
              /><Text  style={{ margin: "4px", marginTop: "13px"}}>Done</Text>
              <View style={{ width: "100%" }}>
                <Text
                  style={{paddingLeft:5, fontSize:27,fontWeight:600,color:"white",fontFamily: "Montserrat"
                    ,textDecoration: "line-through",
                    textDecorationColor: "red",
                  }}
                >
                  {val.items}
                </Text>
              </View>
            </View>
            <Button onPress={() => handleDelete(val.items)} title="delete" />
          </View>
        );
      }
    } else if (i > 0 && val.prio == "Medium" || val.prio == "medium") {
      if (checkk == false) {
        return (
         
     <View
     style={{
       display: "flex",
       flexDirection: "row",
       margin:'3px', backgroundColor: "yellow",
     }}
   >
     <View
       style={{ flexDirection: "row", width: "84%", margin: "4px", paddingLeft:50}}
     >
       <CheckBox
         value={checkk}
         onValueChange={setCheckk}
         style={{ margin: "4px" ,marginTop:'13px'}}
       />
       <View style={{ width: "100%" }}>
         <Text style={{paddingLeft:5, fontSize:27,fontWeight:600,fontFamily: "Montserrat", }}>{val.items}</Text>
       </View>
     </View>
     <Button onPress={() => handleDelete(val.items)} title="delete" />
   </View>
        );
      }
      if (checkk == true) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin:'3px', backgroundColor: "yellow",
            }}
          >
            <View
              style={{ flexDirection: "row", width: "84%", margin: "4px", paddingLeft:50 }}
            >
              <CheckBox
                value={checkk}
                onValueChange={setCheckk}
                style={{ margin: "4px", marginTop: "13px"}}
              /><Text  style={{ margin: "4px", marginTop: "13px"}}>Done</Text>
              <View style={{ width: "100%" }}>
                <Text
                  style={{paddingLeft:5, fontSize:27,fontWeight:600,fontFamily: "Montserrat"
                    ,textDecoration: "line-through",
                    textDecorationColor: "red",
                  }}
                >
                  {val.items}
                </Text>
              </View>
            </View>
            <Button onPress={() => handleDelete(val.items)} title="delete" />
          </View>


        );
      }
    } 
    else if (i > 0 && val.prio == "Low" || val.prio == "low") {
      if (check3 == false) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin:'3px', backgroundColor: "orange",
            }}
          >
            <View
              style={{ flexDirection: "row", width: "84%", margin: "4px", paddingLeft:50}}
            >
              <CheckBox
                value={check3}
                onValueChange={setCheck3}
                style={{ margin: "4px" ,marginTop:'13px'}}
              />
              <View style={{ width: "100%" }}>
                <Text style={{paddingLeft:5, fontSize:27,fontWeight:600, fontFamily: "Montserrat",}}>{val.items}</Text>
              </View>
            </View>
            <Button onPress={() => handleDelete(val.items)} title="delete" />
          </View>

        );
      }
      if (check3 == true) {
        return (
          <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin:'3px', backgroundColor: "orange",
          }}
        >
          <View
            style={{ flexDirection: "row", width: "84%", margin: "4px", paddingLeft:50 }}
          >
            <CheckBox
              value={check3}
              onValueChange={setCheck3}
              style={{ margin: "4px", marginTop: "13px"}}
            /><Text  style={{ margin: "4px", marginTop: "13px"}}>Done</Text>
            <View style={{ width: "100%" }}>
              <Text
                style={{paddingLeft:5, fontSize:27,fontWeight:600,fontFamily: "Montserrat"
                  ,textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                {val.items}
              </Text>
            </View>
          </View>
          <Button onPress={() => handleDelete(val.items)} title="delete" />
        </View>
        );
      }
    } 
  });

  return <View>{mappedData}</View>;
};

export default Iziphumo;
