import chief from './../../assets/home/chef-service.jpg'

const BistroInfo = () => {
    return (
        <div 
        style={{
            backgroundImage: `url(${chief})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'fixed'
        }}
        className='h-screen flex justify-center items-center'
        >
            <div className='text-center w-3/4 mx-auto bg-white py-24 px-32'>
                <h2 className='text-4xl pb-2'>Bistro Boss</h2>
                <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default BistroInfo;