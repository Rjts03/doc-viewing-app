import React from "react";

const TxtRenderer = ({ data }) => {
  return (
    <div style={{ width: "100%", height: "100%", overflowX: "auto" }}>
      <object
        id="text-frame"
        style={{
          width: "100%",
          minHeight: "100%",
          maxWidth: "calc(100% - 120px)",
          overflowX: "auto",
          border: "1px dashed #ddd",
        }}
        data={data}
      >
        Text Doc
      </object>
    </div>
  );
};

export default TxtRenderer;
