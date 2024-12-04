import InputBox from "@/components/UI/input/InputBox";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import React from "react";

const MockPage = () => {
  return (
    <Auxiliary>
      <InputBox
        label={""}
        value={""}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Auxiliary>
  );
};

export default MockPage;
