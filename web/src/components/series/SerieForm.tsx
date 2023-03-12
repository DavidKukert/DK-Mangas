import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SerieDropzone } from "./SerieDropzone";

interface FormSerieProps {
  buttonText?: string;
  formSubmit: (data: FormSerieSchema) => void;
}

const serieSchema = z.object({
  serieTitle: z.string(),
  serieTitleAlter: z.string(),
  serieAuthor: z.string(),
  serieArtist: z.string(),
  serieDescription: z.string(),
  serieCover: z.custom<File>((v) => v instanceof File).or(z.string()),
});

type FormSerieSchema = z.infer<typeof serieSchema>;

const SerieForm: React.FC<FormSerieProps> = ({
  buttonText,
  formSubmit,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormSerieSchema>({
    resolver: zodResolver(serieSchema),
  });
  const onSubmit = handleSubmit((data) => formSubmit(data));
  return (
    <form id="serie-form" onSubmit={onSubmit}>
      <SerieDropzone setValue={setValue} className="serie-dropzone" />
      <div className="serie-info">
        <input
          type="text"
          {...register("serieTitle")}
          placeholder="Título..."
        />
        <input
          type="text"
          {...register("serieTitleAlter")}
          placeholder="Titulo(s) Alternativos..."
        />
        <input
          type="text"
          {...register("serieAuthor")}
          placeholder="Autor(es)..."
        />
        <input
          type="text"
          {...register("serieArtist")}
          placeholder="Artista(s)..."
        />
        <textarea
          {...register("serieDescription")}
          placeholder="Descrição ou sinopse..."
        ></textarea>
        <button type="reset">Limpar</button>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export { SerieForm };
export type { FormSerieSchema };
