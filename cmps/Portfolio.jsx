import Image from "next/image";
import { Tag } from 'antd';
import 'antd/dist/antd.css'
export default function Portfolio() {
  return (
    <section className="portfolio-container">
      <h1>portfolio</h1>
      <section className="projects">


        <div className="project">
          <Image src="/images/taskooler-pic.png" width="400" height="200" />
          <div className="tags">
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
          </div>
          <div className="buttons">
            <a href="#" class="myButton">View Demo</a>
            <a href="#" class="myButton red">Source Code</a>

          </div>
          <div className="desc">


            <p>um expedita vitae aliquam cumque dedsdd asd ad ad d  sdf sdfsdfsf sdfbitis sed? Mollitia!</p>

          </div>
        </div>
        <div></div>
        <div></div>
        <div className="project">
          <Image src="/images/taskooler-pic.png" width="400" height="200" />
          <div className="buttons">
            <a href="#" class="myButton">View Demo</a>
            <a href="#" class="myButton red">Source Code</a>

          </div>
          <div className="desc">
            <div className="tags">

              <p>um expedita vitae aliquam cumque debitis sed? Mollitia!</p>
            </div>
          </div>
        </div>

        <div className="project">
          <Image src="/images/taskooler-pic.png" width="400" height="200" />
          <div className="buttons">
            <a href="#" class="myButton">View Demo</a>
            <a href="#" class="myButton red">Source Code</a>

          </div>
          <div className="desc">
            <div className="tags">

              <p>um expedita vitae aliquam cumque debitis sed? Mollitia!</p>
            </div>
          </div>
        </div>
        <div></div><div></div>
        <div className="project">
          <Image src="/images/taskooler-pic.png" width="400" height="200" />
          <div className="buttons">
            <a href="#" class="myButton">View Demo</a>
            <a href="#" class="myButton red">Source Code</a>

          </div>
          <div className="desc">
            <div className="tags">

              <p>um expedita vitae aliquam cumque debitis sed? Mollitia!</p>
            </div>
          </div>
        </div>

      </section>
    </section>
  )
}
