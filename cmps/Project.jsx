import Image from "next/image";

export function Project({ project }) {
  const { name, tags, demoUrl, sourceUrl, desc, imgUrl } = project
  return (
    <section className="project " >
      {/* <section className="project flicker-in-1" > */}

      <h1>{name}</h1>
      <div className="desc">
        <pre>{desc}</pre>
      </div>
      <div className="badges">
        <p>Techonologies:</p>
        {tags.map(tag => <img key={Math.random()} src={`/images/tags/${tag}.svg`} />)}
      </div>
      <Image src={imgUrl} width="650" height="400" />
      <div className="buttons">
        <a href={demoUrl} className="myButton" target="_blank">View Demo</a>
        <a href={sourceUrl} className="myButton red" target="_blank">Source Code</a>
      </div>
    </section>
  )
}
