import Image from 'next/image';
import Logo from "../../components/images/facebook.svg.svg";


const Home = () => {
  return <div className='flex items-center justify-center h-screen bg-grey-200'>
    <div className='w-[600px] -mt-60'>
      <Image src={Logo} className='-ml-8'
       alt="facebook logo" 
       width={300}
        height={300}
        />
        <h1 className='text-3xl -mt-3'>Facebook helps you connect and share with the people in your life.</h1>
    </div>
    <div className='flex flex-col bg-white p-4 rounded-md'>
      <input type='email' placeholder='Email address or phone number' className='p-3 px-4 w-96 border my-2 rounded-md'/>
      <input type='password' placeholder='Password' className='p-3 px-4 w-96 border' my-2 rounded-md/>
      <button className='bg-blue-500  w-full p-2 rounded-md font-semibold text-white text-lg hover:bg-blue-600 mt-2'>Log in</button>
      {/* <a href='https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzIyNjAxMzM5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login&next'>forgotten password</a> */}
      <p className='text-blue-500 hover:underline cursor-pointer text-center text-sm my-4'>Forgotten password</p>
      <hr className="w-full"/>
      <button className='bg-green-500  w-fit p-2 rounded-md mx-auto mt-6 font-semibold text-white text-lg hover:bg-green-600'>Create New Account</button>
      <h3></h3>
    </div>
    </div>;
};
export default Home;