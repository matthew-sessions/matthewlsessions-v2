import Intro from '../components/malt/Intro';
import Install from '../components/malt/Install';
import ShortCuts from '../components/malt/ShortCuts';
import Head from 'next/head';

export default function Notion() {
return (
    <div className="">
      <Head>
        <link rel="shortcut icon" href="https://ewr1.vultrobjects.com/siteimages/maltlogolite.png" />
        <title>Malt</title>
        <meta name="description" content="Use model assisted labeling to quickly turn videos into object detecion datasets!" />
        <meta property="og:title" content="MALT" />
        <meta property="og:description" content="Use model assisted labeling to quickly turn videos into object detecion datasets!" />
        <meta property="og:url" content="https://matthewlsessions.com/malt" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ewr1.vultrobjects.com/siteimages/maltlogolite.png"></meta>
      </Head>
      <Intro/>
      <Install/>
      <ShortCuts/>
    </div>
    )
}