import axios from "../../axiox";

import { ChangeEvent, useRef, useState } from "react";
import { Button } from "../UI";
import { UploadFileProps } from "./UploadFile.interface";

export const UploadFile = ({ change }: UploadFileProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          `/upload/${file.name}/${"image"}`,
          formData
        );

        change && change(response.data.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => inputFileRef?.current?.click()} size="small">
        загрузить аватарку
      </Button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
    </div>
  );
};
