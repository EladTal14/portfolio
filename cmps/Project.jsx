import Image from "next/image";

export function Project({ project }) {
  const { name, tags, demoUrl, sourceUrl, desc, imgUrl } = project
  return (
    <section className="project">

      <h1>{name}</h1>
      <Image src={imgUrl} width="400" height="200" />
      <div className="badges">
        {tags.map(tag => <img key={Math.random()} src={`/images/tags/${tag}.svg`} />)}


      </div>
      <div className="buttons">
        <a href={demoUrl} className="myButton" target="_blank">View Demo</a>
        <a href={sourceUrl} className="myButton red" target="_blank">Source Code</a>

      </div>
      <div className="desc">
        <pre>{desc}</pre>
      </div>
    </section>
  )
}
