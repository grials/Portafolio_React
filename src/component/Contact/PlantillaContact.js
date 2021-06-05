import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsIcon from "@material-ui/icons/Drafts";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./StyleContact.scss";
import useTheme from "../../Hook/useTheme";

const objectData = [
  {
    id: 1,
    alt: "phone",
    title: "Phone",
    data1: "0412-540-8861",
    data2: "0239-232-9501",
  },
  {
    id: 2,
    alt: "email",
    title: "Email",
    data1: "joseudemy@gmail.com",
    data2: "josemendez15161@gmail.com",
  },
  {
    id: 3,
    alt: "location",
    title: "Location",
    data1: "calle 49, 1215, Santa Teresa del Tuy, Miranda",
    data2: "Venezuela",
  },
];

function DataContact({ alt, title, data1, data2 }) {
  return (
    <div className={`dataContact`}>
      <div className="icon">
        {alt === "phone" && <PhoneIcon />}
        {alt === "email" && <DraftsIcon />}
        {alt === "location" && <LocationOnIcon />}
      </div>
      <div className="data">
        <h3>{title}</h3>
        <h4>{data1}</h4>
        <h4>{data2}</h4>
      </div>
    </div>
  );
}

function PlantillaContact() {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`plantillaContact ${
        mode === "LightTheme"
          ? "themeLightPlantillaContac"
          : "themeDarkPlantillaContac"
      }`}
    >
      {objectData.map((elem) => (
        <DataContact
          alt={elem.alt}
          title={elem.title}
          data1={elem.data1}
          data2={elem.data2}
          key={elem.id}
        />
      ))}
    </div>
  );
}

export default PlantillaContact;
