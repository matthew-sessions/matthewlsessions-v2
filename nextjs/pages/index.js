import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Projects from '../components/home/Projects';
import Experience from '../components/home/Experience';
import Skills from '../components/home/Skills';
import SpokenLs from '../components/home/SpokenLs';
import Education from '../components/home/Education';
import baseUrl from '../utils/baseUrl';

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/segments/all`);
  const data = await res.json();
  let info = {
    projects: [],
    history: [],
    skills: [],
    languages: [],
    education: []
  };
  data.data.forEach(value => {
    if (value.type == 'projects') {
      info.projects.push(value)
    } else if (value.type == "history") {
      info.history.push(value)
    } else if (value.type == "skills") {
      info.skills.push(value)
    } else if (value.type == "languages") {
      info.languages.push(value)
    } else if (value.type == "education") {
      info.education.push(value)
    }
  });
  return {
    props: {
      info
    }
  }
}

export default function Home({ info }) {

  return (
    <div className=" h-fit pb-12 bg-zinc-100">

      <div className=" w-full px-5 pb-3  md:px-4 bg-zinc-800  pt-3 md:flex md:flex-row shadow-md">
        <div className=" md:pl-5 sm:w-full md:w-9/12 lg:w-3/5">
          <div className="flex flex-row">
            <div className="w-3/12">
              <img alt="meaningfull text" width={45} height={45} className=" w-28 rounded-2xl float-right mr-3" src="https://ewr1.vultrobjects.com/siteimages/me.jpeg" />
            </div>
            <div className="w-9/12">
              <p className=" text-2xl text-gray-300 md:text-3xl font-catamaran">Matthew L Sessions</p>
              <p className=" text-xl text-gray-300 md:text-2xl font-catamaran ">Software Engineer (Data)</p>
              <div className='flex flex-auto'>
                <a href='https://www.linkedin.com/in/matthew-sessions/' ><FontAwesomeIcon className=' text-gray-300 mr-1 h-6 hover:bg-slate-400 p-1 rounded-md' icon="fab fa-linkedin-in" /></a>
                <a href='https://github.com/matthew-sessions' ><FontAwesomeIcon className=' text-gray-300 mr-1 h-6 hover:bg-slate-400 p-1 rounded-md' icon="fab fa-github" /></a>
                <a href='https://www.facebook.com/matthewlsessions'><FontAwesomeIcon className=' text-gray-300 mr-1 h-6 hover:bg-slate-400 p-1 rounded-md' icon="fab fa-facebook-f" /></a>
                <a href='https://www.youtube.com/channel/UC2voQJqWIxa24tMSpLpj91Q'><FontAwesomeIcon className=' text-gray-100 mr-1 h-6 hover:bg-slate-400 p-1 rounded-md' icon="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-3/12 lg:w-2/5">

        </div>
      </div>
      <div>
        <div className=" mx-2 md:mx-6 2xl:mx-44 md:flex md:flex-row">
          <div className=' md:w-8/12 lg:w-9/12'>
            <Projects projects={info.projects} />
            <Experience history={info.history} />
          </div>
          <div className=' md:w-4/12 lg:w-3/12'>
            <Skills skills={info.skills} />
            <SpokenLs ls={info.languages} />
            <Education education={info.education} />
          </div>
        </div>
      </div>
    </div>
  )
}
