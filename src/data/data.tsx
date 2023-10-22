import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import PrintablesIcon from '../components/Icon/PrintablesIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rick Rocklin - Resume',
  description: "Rick Rocklin - Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rick Rocklin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a United States based <strong className="text-stone-100">Lead Infrastructure Engineer</strong>, currently working
        at <strong className="text-stone-100">Wells Fargo & Company</strong> helping build a modern, end-user focused,
		    distributed infrastructure leveraging both public and private cloud.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me hanging out with my <strong className="text-stone-100">wonderful wife and children</strong>,
        find me working on a <strong className="text-stone-100">home automation</strong> project,
		<strong className="text-stone-100"> 3D printing </strong>something, or exploring beautiful{' '}
        <strong className="text-stone-100">Arizona</strong> with my family.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A lead information technology associate specializing in x86 Virtualization (VMware), Cloud infrastructure and 
	Systems Analysis with progressively increasing responsibilities.`,
  aboutItems: [
    {label: 'Location', text: 'Phoenix, Arizona', Icon: MapIcon},
    {label: 'Age', text: '40s', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Home Automation, 3D Printing, Cars', Icon: SparklesIcon},
    {label: 'Study', text: 'DeVry University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Wells Fargo & Co', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'February 2005',
    location: 'DeVry University',
    title: 'Bachelor of Science in Networking and Communication Management',
    content: <p>School was an excellent place to expand my skills, and also meet some lifelong friends who I still work with today.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2021 - Present',
    location: 'Wells Fargo & Co',
    title: 'Lead Infrastructure Engineer',
    content: (
      <p>
        Design and test operating GitOps framework, Architecture and engineering activities related to End User Computing Platform, 
        Consult at the highest technical level with clients and IT management related to design, planning, integration, implementation, 
        scalability, problem definitions and resolution of End User Compute platforms, Design and deliver fully automated solutions using 
        Ansible and other tools.
      </p>
    ),
  },
  {
    date: 'July 2020 - September 2021 (1 yr 3 mos)',
    location: 'Wells Fargo & Co (CTO)',
    title: 'Software Senior Engineer',
    content: (
      <p>
        Supporting and maintaining PaaS. Primarily responsible for the design, build, and support of Cloud Foundry and Kubernetes. 
        Consult at the highest technical level with clients and IT management related to design, planning, integration, implementation, 
        scalability, problem definitions and resolution of PaaS hosted applications. Responsible for building PaaS environments, developing 
        and maintaining automation scripts, patching, and performance for the overall health of all PaaS environment. Testing product enhancements, 
        and upgrading platforms.
      </p>
    ),
  },
  {
    date: 'July 2018 - July 2020 (2 yrs 1 mo)',
    location: 'Wells Fargo & Co',
    title: 'Operating Systems Engineer (Team Lead)',
    content: (
      <p>
        Supporting and maintaining IaaS. Primarily responsible for the design and engineering related to the VMware vRealize Suite products. 
        Consult at the highest technical level with 3rd parties and IT management related to design, planning, integration, implementation, 
        scalability, problem definitions, and resolution of IaaS platform. Testing product enhancements, and upgrading platforms.
      </p>
    ),
  },
  {
    date: 'January 2008 - July 2018 (10 yrs 7 mos)',
    location: 'Wells Fargo & Co',
    title: 'Virtualization Engineer',
    content: (
      <p>
        Primary responsibilities include engineering tasks related to the enterprise x86 VMware offering at Wells Fargo. Including but not
        limited to proof of concepts, engineering and defining new process, automation, documentation and training, escalation point for 
        support analysts, certification and deployments of new services including all product lines from VMware and other vendors, design 
        and design reviews.
      </p>
    ),
  },
  {
    date: 'September 2007 - January 2008 (5 mos)',
    location: 'Wells Fargo & Co',
    title: 'Web Engineer',
    content: (
      <p>
		Provide top-to-bottom hosting services for over 50 significant internal customers.  Collaborate with internal groups to realize 
		and implement robust but cost-effective solutions meeting business objectives.  Manage 150+ remote Windows and Linux physical and 
		virtual servers supporting dozens of custom N-tier applications using tailored industry-standard platforms and architectures such 
		as .NET, MS-SQL, MSCS, Apache, Tomcat, etc.
      </p>
    ),
  },
  {
    date: 'July 2006 - September 2007 (1 yr 3 mos)',
    location: 'ProNet Solutions',
    title: 'Emergency Response Team Engineer',
    content: (
      <p>
		Primarily responsible for delivering an immediate response on high priority troubles to clients and employees by performing both 
		support activities and analysis for new and existing clients within the financial services sector. Domain administrator for 80+ multi 
		branch community banks. Providing remote desktop and network support, providing on-site desktop and network support. Deliver both a 
		responsive and enjoyable experience to customers, while providing remote LAN/WAN management and engineering services in a team environment. 
		This includes but not limited to improving the efficiency and effectiveness of customers by proactively auditing and supporting their PC 
		and networking needs. Internal training. Working in a team with Network Administrators, Network Engineers, Project Managers, Relationship 
		Managers & Security Professionals in a single point of contact environment.
      </p>
    ),
  },
  {
    date: 'May 2005 - July 2006 (1 yr 3 mos)',
    location: 'ProNet Solutions',
    title: 'Technical Support Consultant',
    content: (
      <p>
		Duties include phone/remote support in a Single Point of Contact environment. Network Administration for 30+ financial institutions. 
		Troubleshooting desktop/server environments. Multi-tasking.
      </p>
    ),
  },
  {
    date: 'May 2004 - April 2005 (1 yr)',
    location: 'TeleSpectra LLC',
    title: 'Network Analyst',
    content: (
      <p>
		Duties include phone/remote support in a Single Point of Contact environment. Network Administration for 30+ financial institutions. 
		Troubleshooting desktop/server environments. Multi-tasking.
      </p>
    ),
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Drop me a line and I will get back to you as soon as possible.',
  items: [
    {
      type: ContactType.Email,
      text: 'me@rickrocklin.com',
      href: 'mailto:me@rickrocklin.com',
    },
    {
      type: ContactType.Location,
      text: 'Phoenix, Arizona',
      href: 'https://www.google.com/maps/place/Phoenix,+AZ',
    },
    {
      type: ContactType.Github,
      text: 'ntalekt',
      href: 'https://github.com/ntalekt',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ntalekt'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rickrocklin/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/1883031/ntalekt'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ricksface'},
  {label: 'Printables', Icon: PrintablesIcon, href: 'https://www.printables.com/@ntalekt_371042'},
];
