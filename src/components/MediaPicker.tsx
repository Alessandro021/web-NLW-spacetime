"use client"  //FAZ COM QUE ESSE COMPONENTE QUE POSSUI CODIGO JS FUNCIONE COM O NEXT DO LADO DO FRONTEND
import { ChangeEvent, useState } from "react"

export function MediaPicker(){
  const [preview, setPreview] = useState<string | null>(null)
  const [type, setType] = useState<string | null>(null)

  function onfileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if(!files){
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setType(files[0].type)
    setPreview(previewURL)
  }
  return (
    <>
      <input onChange={onfileSelected} type="file" name="coverUrl" id="media" accept="image/*, video/*" className="invisible h-0 w-0"/>

      { (preview &&  type?.includes("image")) && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover"/>}
      {/* { (preview && type?.includes("video")) && <video src={preview} controls={true }className="w-full aspect-video rounded-lg object-cover"/>} */}
    </>
  )
}