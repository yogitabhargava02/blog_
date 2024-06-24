import Link from "next/link";
import style from "./homepage.module.css"
import Featured from "./components/Featured/Featured";

import CategoryList from "./components/CategoryList/CategoryList";
import CardList from "./components/CardList/CardList";
export default function Home() {
  return (
    <div className="style.container">
<Featured/>
<CategoryList/>
<CardList/>

<div className="">popular picks</div>
      <Link href="/">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsam molestias accusantium atque quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, laboriosam dolorem? Incidunt rerum quibusdam facere tempora iste odio aperiam quas optio id quidem! Adipisci dignissimos laudantium magni obcaecati deleniti <iure className="lorem"></iure>mollitia quis deleniti error officia odio voluptates qui maiores adipisci nemo, libero quasi, quod, provident ipsa!Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero nostrum, rerum porro consectetur veniam ab quidem atque recusandae nam alias itaque quae optio id quasi eius, nemo eveniet saepe?</Link>
    </div>
  );
}
