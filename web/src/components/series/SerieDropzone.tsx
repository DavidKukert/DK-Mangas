import Image from "next/image";
import React, { HTMLAttributes, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UseFormSetValue } from "react-hook-form";
import { FormSerieSchema } from "./SerieForm";
import { FaUpload } from "react-icons/fa";

interface SerieDropzoneProps extends HTMLAttributes<HTMLElement> {
  setValue: UseFormSetValue<FormSerieSchema>;
}

interface CoverProps extends File {
  preview: string;
}

const SerieDropzone: React.FC<SerieDropzoneProps> = ({
  setValue,
  className,
  ...props
}) => {
  const [image, setImage] = useState<CoverProps>();

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/*": [".webp", ".png", ".jpeg"],
    },
    multiple: false,
    maxFiles: 1,
    onDrop(acceptedFiles) {
      acceptedFiles.map((file) => {
        setImage(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setValue("serieCover", file);
      });
    },
  });

  return (
    <div {...getRootProps({ className })}>
      <input {...getInputProps()} />
      {image ? (
        <Image
          src={image.preview}
          alt="serie cover"
          width={300}
          height={400}
          className="w-full h-auto shadow-sm shadow-neutral-900"
        />
      ) : (
        <FaUpload />
      )}
    </div>
  );
};

export { SerieDropzone };
