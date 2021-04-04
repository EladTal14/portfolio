

export const myService = {
  getProjects
}

function getProjects() {

  return projects
}

const projects = [
  {
    id: '1',
    name: 'Taskooler',
    tags: ['MongoDB', 'React', 'D&D', 'WebSockets'],
    imgUrl: '/images/taskooler-pic.png',
    demoUrl: 'https://taskooler.herokuapp.com/',
    sourceUrl: 'https://github.com/EladTal14/trello',
    desc: 'Clone Trello app with D&D and Websockets'
  },

  {
    id: '3',
    name: 'Appsus',
    tags: ['React', 'Javascript', 'Cloudinary'],
    imgUrl: '/images/sprint3-pic.png',
    demoUrl: 'https://eladtal14.github.io/git-Sprint-3/',
    sourceUrl: 'https://github.com/EladTal14/git-Sprint-3',
    desc: 'Clone to Google apps (Email,Notes,Books)'
  },
  {
    id: '2',
    name: 'MemeGen',
    tags: ['Canvas', 'Javascript', 'Cloudinary'],
    imgUrl: '/images/memegen-pic.png',
    demoUrl: 'https://eladtal14.github.io/git-Sprint-2-Meme-Generator/',
    sourceUrl: 'https://github.com/EladTal14/git-Sprint-2-Meme-Generator',
    desc: 'Meme generator for the entire family'
  }

]
