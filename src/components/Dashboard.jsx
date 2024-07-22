import { GoPerson } from "react-icons/go"; 
import { CiHospital1 } from "react-icons/ci"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { BiMedal } from "react-icons/bi"; 
import AutoSlider from '../container/AutoSlider.jsx';
import content from '../assets/dashboard-content2.png'
import { Link } from 'react-router-dom'
import FadeInOnScroll from '../container/FadeInOnScroll.jsx'
import { DataCard } from '../container/DataCard.jsx';

const Dashboard =()=> {
    return (
        <div className='relative max-w-full h-[170vh] bg-center bg-cover'>
            <AutoSlider/>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-500  opacity-60"></div>
            <div className='z-10 relative flex flex-col justify-end items-center h-[40vh] text-white gap-4'>
                <h1 className='text-[40px] font-bold'>Puskesmas Lore Utara</h1>
                <p className='w-[70%] text-center font-bold text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, nisi sit amet sodales dictum, ex metus lobortis ex, ac dictum odio quam ac nibh. In pellentesque lobortis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla malesuada sapien et enim fringilla venenatis.</p>
            </div>
            <div className='z-10 relative text-white font-bold flex gap-9 justify-center mt-8 text-base'>
                <button className='w-40 h-10 bg-blue-800 hover:bg-blue-950 rounded-md'>Kontak</button>
                <button className='w-40 h-10 text-black bg-white rounded-md hover:bg-slate-600 hover:text-white'>Pelajari</button>
            </div> */}
            <div className='max-w-full min-h-[100vh] flex justify-left items-center'>
                <FadeInOnScroll>
                <div className='h-[70vh] w-[80%] flex flex-col justify-center items-left gap-4 px-20 '>
                    <h1 className='text-3xl text-blue-900 font-bold '>Puskesmas Lore Utara Desa Wuasa</h1>
                    <p className=''>Puskesmas Lore Utara adalah pusat kesehatan masyarakat yang berada di sekitar daerah desa wuasa</p>
                    <button className='flex items-left bg-blue-600 rounded-full w-fit px-8 py-3 text-white'><Link to="/aboutus">Selengkapnya</Link></button>
                </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                <div className='w-[50vh] h-[75vh] flex flex-row'>   
                        <img src={content} alt="" className='pt-20 bg-blue-500 rounded-tl-[15vh] border border-blue-500 border-4 absolute top-[2vh] right-[30vh] w-[50vh] z-10'/>
                        <div className='relative w-96 h-70 top-[10vh] right-[20vh] bg-gradient-to-t from-blue-500 to-blue-400 rounded-br-[15vh] z-0'>
                        </div>
                </div>
                </FadeInOnScroll>
                
            </div>
                <div className="bg-slate-300 max-w-full min-h-[30vh] flex items-center justify-evenly gap-8 mt-8">
                    <FadeInOnScroll>
                        <DataCard
                        Image={<BiMedal/>}
                        Title='10'
                        Description='10 Tahun Lebih Berdiri'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<BsFillPersonFill/>}
                        Title='356+'
                        Description='Penanganan Pasien'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<GoPerson/>}
                        Title='12+'
                        Description='Dokter dan Staff'/>
                    </FadeInOnScroll>
                    <FadeInOnScroll>
                        <DataCard
                        Image={<CiHospital1/>}
                        Title='15+'
                        Description='Ruangan Puskesmas'/>
                    </FadeInOnScroll>
                   
                </div>
            
            
            
        </div>
    )
}

export default Dashboard