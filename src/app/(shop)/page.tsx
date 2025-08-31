import { titleFont } from "@/config/font";

export default function () {
  return (
    <div className="">
      <h1 className="font-bold bg"> hola mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>hola mundo 2</h1>
      <button className="btn-primary">aaa</button>
    </div>
  );
}




